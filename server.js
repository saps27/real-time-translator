const express = require('express');
const path = require('path');

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const DEFAULT_TRANSLATE_URL = process.env.LIBRETRANSLATE_API_URL || 'https://libretranslate.com';
const API_KEY = process.env.LIBRETRANSLATE_API_KEY || '';

app.use(express.json({ limit: '1mb' }));
app.use(express.static(path.join(__dirname, 'public')));

function getApiBaseUrl() {
  const configured = (process.env.LIBRETRANSLATE_API_URL || '').trim();
  return configured || DEFAULT_TRANSLATE_URL;
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 20000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    return response;
  } finally {
    clearTimeout(timer);
  }
}

async function getLanguages() {
  const baseUrl = getApiBaseUrl();
  const response = await fetchWithTimeout(`${baseUrl}/languages`, {
    method: 'GET',
    headers: { Accept: 'application/json' }
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to load language list: ${response.status} ${errorText}`);
  }

  const languages = await response.json();
  return Array.isArray(languages) ? languages : [];
}

async function translateText({ q, source, target }) {
  if (!q || !q.trim()) {
    const error = new Error('Text input cannot be empty.');
    error.statusCode = 400;
    throw error;
  }

  if (!source || !target) {
    const error = new Error('Please select both source and target languages.');
    error.statusCode = 400;
    throw error;
  }

  const baseUrl = getApiBaseUrl();
  const payload = {
    q: q.trim(),
    source,
    target,
    format: 'text'
  };

  if (API_KEY) {
    payload.api_key = API_KEY;
  }

  const response = await fetchWithTimeout(`${baseUrl}/translate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(API_KEY ? { Authorization: `Bearer ${API_KEY}` } : {})
    },
    body: JSON.stringify(payload)
  }, 25000);

  const text = await response.text();

  if (!response.ok) {
    let message = 'Translation request failed.';
    try {
      const parsed = JSON.parse(text);
      message = parsed?.error || parsed?.message || message;
    } catch (error) {
      message = text || message;
    }

    const translatedError = new Error(message);
    translatedError.statusCode = response.status;
    throw translatedError;
  }

  let data;
  try {
    data = JSON.parse(text);
  } catch (error) {
    throw new Error('The translation service returned an invalid JSON response.');
  }

  const translatedText = data.translatedText || data.translation || '';
  if (!translatedText) {
    throw new Error('The translation service replied without a translated result.');
  }

  return { translatedText, detectedLanguage: data.detectedLanguage || null };
}

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    status: 'healthy',
    provider: getApiBaseUrl()
  });
});

app.get('/api/languages', async (req, res) => {
  try {
    const languages = await getLanguages();
    const normalized = languages.map((language) => ({
      code: language.code || language.lang || language.name,
      name: language.name || language.lang || language.code || 'Unknown'
    }));

    res.json(normalized);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to load languages.';
    res.status(503).json({ error: message });
  }
});

app.post('/api/translate', async (req, res) => {
  const { q, source, target } = req.body || {};

  try {
    const result = await translateText({ q, source, target });
    res.json(result);
  } catch (error) {
    const statusCode = error?.statusCode || 500;
    const message = error instanceof Error ? error.message : 'Unexpected translation error.';
    res.status(statusCode).json({ error: message });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Real-Time Translator running on http://localhost:${PORT}`);
  console.log(`Using translation backend: ${getApiBaseUrl()}`);
});
