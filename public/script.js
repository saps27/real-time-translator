* {
  box-sizing: border-box;
}

:root {
  --bg: #07111f;
  --bg-alt: #0d1b2a;
  --panel: rgba(15, 23, 42, 0.88);
  --panel-strong: #101d32;
  --panel-soft: #16253d;
  --primary: #7c9cff;
  --primary-strong: #5b7df5;
  --secondary: #a78bfa;
  --success: #34d399;
  --warning: #fbbf24;
  --danger: #f87171;
  --text: #e6edf9;
  --muted: #9bb0d1;
  --border: rgba(148, 163, 184, 0.2);
  --shadow: 0 18px 40px rgba(15, 23, 42, 0.5);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: radial-gradient(circle at top, #13213a 0%, var(--bg) 35%, #040d18 100%);
  color: var(--text);
  min-height: 100vh;
}

a {
  color: var(--primary);
  text-decoration: none;
}

button,
select,
textarea {
  font: inherit;
}

.app-shell {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
  padding: 32px 0 56px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.logo {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: grid;
  place-items: center;
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  box-shadow: var(--shadow);
}

.brand h1 {
  margin: 0;
  font-size: clamp(1.5rem, 1.2rem + 1vw, 2.2rem);
}

.brand small {
  display: block;
  color: var(--muted);
  margin-top: 4px;
}

.status-pill {
  background: rgba(124, 156, 255, 0.12);
  border: 1px solid rgba(124, 156, 255, 0.3);
  color: var(--primary);
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 0.82rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-weight: 600;
}

.hero {
  padding: 30px 24px;
  background: linear-gradient(135deg, rgba(124, 156, 255, 0.12), rgba(167, 139, 250, 0.12));
  border: 1px solid var(--border);
  border-radius: 28px;
  box-shadow: var(--shadow);
  margin-bottom: 28px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr;
  gap: 24px;
  align-items: center;
}

.hero h2 {
  font-size: clamp(2.1rem, 1.8rem + 2vw, 3.4rem);
  margin: 0 0 12px;
  line-height: 1.1;
}

.hero p {
  color: var(--muted);
  line-height: 1.7;
  margin: 0;
  max-width: 60ch;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.badge {
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 0.8rem;
}

.preview-card {
  border: 1px solid var(--border);
  background: rgba(8, 15, 24, 0.75);
  border-radius: 22px;
  padding: 22px;
  min-height: 200px;
}

.preview-card h3 {
  margin-top: 0;
  margin-bottom: 14px;
  color: var(--primary);
}

.preview-list {
  display: grid;
  gap: 12px;
}

.preview-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: rgba(124, 156, 255, 0.04);
}

.preview-item strong {
  font-size: 0.9rem;
}

.preview-item span {
  color: var(--muted);
  font-size: 0.78rem;
}

.main-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;
}

.panel {
  background: rgba(15, 23, 42, 0.88);
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: var(--shadow);
  padding: 22px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.panel-header h3 {
  margin: 0;
  font-size: 1.2rem;
}

.panel-subtitle {
  color: var(--muted);
  font-size: 0.88rem;
}

.language-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 12px;
  align-items: center;
  margin-bottom: 14px;
}

.field {
  display: grid;
  gap: 8px;
}

.field label {
  color: var(--muted);
  font-size: 0.84rem;
  font-weight: 600;
}

select,
textarea,
input {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: rgba(10, 17, 28, 0.96);
  color: var(--text);
  padding: 11px 12px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

select:focus,
textarea:focus,
input:focus {
  border-color: rgba(124, 156, 255, 0.8);
  box-shadow: 0 0 0 3px rgba(124, 156, 255, 0.17);
}

.swap-btn,
.action-btn,
.icon-btn,
.secondary-btn {
  border: none;
  border-radius: 12px;
  padding: 12px 14px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease, background 0.2s ease;
}

.swap-btn:hover,
.action-btn:hover,
.icon-btn:hover,
.secondary-btn:hover {
  transform: translateY(-1px);
}

.swap-btn {
  background: rgba(124, 156, 255, 0.12);
  color: var(--primary);
  border: 1px solid rgba(124, 156, 255, 0.3);
  min-width: 56px;
}

textarea {
  min-height: 150px;
  resize: vertical;
  line-height: 1.5;
}

.action-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
}

.action-btn {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  min-width: 120px;
}

.secondary-btn {
  background: rgba(148, 163, 184, 0.08);
  color: var(--text);
  border: 1px solid var(--border);
}

.icon-btn {
  background: rgba(52, 211, 153, 0.08);
  color: var(--success);
  border: 1px solid rgba(52, 211, 153, 0.25);
}

.output-box {
  position: relative;
  margin-top: 20px;
}

.output-box textarea {
  min-height: 120px;
  background: rgba(9, 14, 24, 0.95);
}

.status-message {
  margin-top: 14px;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  font-size: 0.9rem;
  min-height: 44px;
  display: flex;
  align-items: center;
}

.status-message.info {
  background: rgba(124, 156, 255, 0.08);
  color: var(--primary);
  border-color: rgba(124, 156, 255, 0.25);
}

.status-message.success {
  background: rgba(52, 211, 153, 0.08);
  color: var(--success);
  border-color: rgba(52, 211, 153, 0.28);
}

.status-message.error {
  background: rgba(248, 113, 113, 0.08);
  color: var(--danger);
  border-color: rgba(248, 113, 113, 0.28);
}

.conversation-box {
  display: grid;
  gap: 16px;
}

.conversation-controls {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.direction-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(124, 156, 255, 0.05);
  border: 1px solid var(--border);
}

.direction-row strong {
  color: var(--primary);
}

.chat-history {
  display: grid;
  gap: 12px;
  max-height: 420px;
  overflow-y: auto;
  padding-right: 4px;
}

.chat-card {
  padding: 14px;
  border-radius: 14px;
  background: rgba(17, 24, 39, 0.82);
  border: 1px solid var(--border);
}

.chat-card small {
  display: block;
  color: var(--muted);
  margin-bottom: 8px;
}

.chat-card p {
  margin: 0;
  line-height: 1.6;
}

.chat-card .translated {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid var(--border);
  color: var(--primary);
}

.empty-state {
  color: var(--muted);
  text-align: center;
  border: 1px dashed var(--border);
  border-radius: 14px;
  padding: 18px;
  background: rgba(148, 163, 184, 0.02);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

@media (max-width: 900px) {
  .hero-grid,
  .main-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .app-shell {
    width: min(100% - 20px, 1200px);
  }

  .topbar,
  .panel-header,
  .direction-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .language-grid,
  .conversation-controls {
    grid-template-columns: 1fr;
  }

  .action-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .action-btn,
  .secondary-btn,
  .icon-btn {
    width: 100%;
  }
}
