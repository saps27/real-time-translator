<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Real-Time Translator is a responsive web app for translating everyday conversations between languages."
    />
    <title>Real-Time Translator</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="app-shell">
      <header class="topbar">
        <div class="brand">
          <div class="logo">RT</div>
          <div>
            <h1>Real-Time Translator</h1>
            <small>Everyday conversations, instantly.</small>
          </div>
        </div>
        <div class="status-pill">Live translation</div>
      </header>

      <section class="hero">
        <div class="hero-grid">
          <div>
            <h2>Speak, translate, and connect with people.</h2>
            <p>
              Translate everyday phrases, questions, greetings, and simple requests between languages like English,
              Telugu, Tamil, and Hindi. Built for student projects and easy everyday use.
            </p>
            <div class="hero-badges">
              <span class="badge">Fast</span>
              <span class="badge">Responsive</span>
              <span class="badge">Secure backend</span>
            </div>
          </div>

          <div class="preview-card">
            <h3>Example phrases</h3>
            <div class="preview-list">
              <div class="preview-item">
                <strong>Hello</strong>
                <span>English → Telugu</span>
              </div>
              <div class="preview-item">
                <strong>Where is the bus stop?</strong>
                <span>English → Tamil</span>
              </div>
              <div class="preview-item">
                <strong>नमस्ते</strong>
                <span>Hindi → English</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main class="main-layout">
        <section class="panel">
          <div class="panel-header">
            <h3>Text translation</h3>
            <span class="panel-subtitle">Real API translation</span>
          </div>

          <form id="translate-form">
            <div class="language-grid">
              <div class="field">
                <label for="source-language">From</label>
                <select id="source-language" name="source-language"></select>
              </div>

              <button id="swap-languages" type="button" class="swap-btn" aria-label="Swap languages">⇅</button>

              <div class="field">
                <label for="target-language">To</label>
                <select id="target-language" name="target-language"></select>
              </div>
            </div>

            <div class="field">
              <label for="source-text">Enter text</label>
              <textarea id="source-text" placeholder="Type a greeting, question, or conversation sentence..."></textarea>
            </div>

            <div class="action-row">
              <button id="translate-btn" class="action-btn" type="submit">Translate</button>
              <button id="voice-input-btn" class="secondary-btn" type="button">🎙️ Speak</button>
              <button id="copy-btn" class="secondary-btn" type="button">Copy</button>
              <button id="clear-btn" class="secondary-btn" type="button">Clear</button>
            </div>
          </form>

          <div class="output-box">
            <div class="field">
              <label for="translated-output">Translated output</label>
              <textarea id="translated-output" readonly placeholder="Your translated text will appear here..."></textarea>
            </div>
            <div class="action-row">
              <button id="speak-btn" class="icon-btn" type="button">🔊 Listen</button>
            </div>
          </div>

          <div id="status-message" class="status-message info" aria-live="polite">
            Ready to translate.
          </div>
        </section>

        <aside class="panel">
          <div class="panel-header">
            <h3>Conversation mode</h3>
            <span class="panel-subtitle">Two speakers</span>
          </div>

          <div class="conversation-box">
            <div class="conversation-controls">
              <div class="field">
                <label for="speaker-one-language">Speaker 1 language</label>
                <select id="speaker-one-language"></select>
              </div>

              <div class="field">
                <label for="speaker-two-language">Speaker 2 language</label>
                <select id="speaker-two-language"></select>
              </div>
            </div>

            <div class="direction-row">
              <strong id="direction-label">A → B</strong>
              <button id="direction-toggle-btn" class="secondary-btn" type="button">Switch to B → A</button>
            </div>

            <div class="field">
              <label for="conversation-input">Message</label>
              <textarea id="conversation-input" placeholder="Type a message for the other speaker..."></textarea>
            </div>

            <div class="action-row">
              <button id="conversation-send-btn" class="action-btn" type="button">Send message</button>
              <button id="conversation-voice-btn" class="secondary-btn" type="button">🎙️ Voice input</button>
              <button id="conversation-clear-btn" class="secondary-btn" type="button">Clear chat</button>
            </div>

            <div id="conversation-history" class="chat-history" aria-live="polite"></div>
          </div>
        </aside>
      </main>
    </div>

    <script src="/script.js"></script>
  </body>
</html>
