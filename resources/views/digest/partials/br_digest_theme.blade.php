<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
    :root {
        --br-page-bg: #E6F9F6;
        --br-teal: #00C2CB;
        --br-teal-hover: #00adb5;
        --br-magenta: #D81B60;
        --br-magenta-hover: #c2185b;
        --br-header: #0d0d0d;
        --br-text: #1a1a1a;
        --br-text-muted: #5c5c5c;
        --br-border: #ccefee;
        --br-field-bg: #f4fcfb;
        --br-white: #ffffff;
        --br-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        --br-shadow-lg: 0 8px 28px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 194, 203, 0.08);
        --br-radius: 8px;
        --br-radius-card: 14px;
        --br-btn-py: 16px;
        --br-btn-px: 28px;
        --br-font: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body.br-digest-ui {
        font-family: var(--br-font);
        background: var(--br-page-bg);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        color: var(--br-text);
        line-height: 1.65;
        -webkit-font-smoothing: antialiased;
    }
    .br-site-bar {
        background: var(--br-header);
        color: #fff;
        padding: 14px 24px;
        text-align: center;
        font-weight: 600;
        font-size: 0.9375rem;
        letter-spacing: 0.02em;
    }
    .br-wrap {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 32px 20px 40px;
    }
    .br-card {
        background: var(--br-white);
        border-radius: var(--br-radius-card);
        box-shadow: var(--br-shadow-lg);
        max-width: 520px;
        width: 100%;
        overflow: hidden;
        border: 1px solid rgba(0, 194, 203, 0.12);
    }
    .br-card-header {
        background: var(--br-header);
        color: #fff;
        padding: 28px 28px 26px;
        text-align: center;
    }
    .br-card-header h1 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 8px;
        letter-spacing: -0.02em;
        line-height: 1.25;
    }
    .br-card-header p {
        font-size: 0.9375rem;
        opacity: 0.88;
        font-weight: 400;
    }
    .br-card-body {
        padding: 30px 28px 32px;
    }
    .br-email-display {
        background: var(--br-field-bg);
        border: 1px solid var(--br-border);
        border-radius: var(--br-radius);
        padding: 16px 18px;
        margin-bottom: 22px;
        font-weight: 500;
        font-size: 0.9375rem;
        color: var(--br-text);
        word-break: break-all;
    }
    .br-confirm-text {
        font-size: 1rem;
        color: var(--br-text);
        margin-bottom: 26px;
        text-align: center;
    }
    .br-confirm-text strong {
        color: var(--br-text);
        font-weight: 600;
    }
    .br-actions {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    .br-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 52px;
        padding: var(--br-btn-py) var(--br-btn-px);
        font-size: 1rem;
        font-weight: 600;
        font-family: inherit;
        border-radius: var(--br-radius);
        text-decoration: none;
        border: none;
        cursor: pointer;
        transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
    }
    .br-btn-primary {
        background: var(--br-magenta);
        color: #fff;
        box-shadow: var(--br-shadow);
    }
    .br-btn-primary:hover {
        background: var(--br-magenta-hover);
        transform: translateY(-1px);
        box-shadow: 0 4px 14px rgba(216, 27, 96, 0.35);
    }
    .br-btn-secondary {
        background: var(--br-teal);
        color: #fff;
        box-shadow: var(--br-shadow);
    }
    .br-btn-secondary:hover {
        background: var(--br-teal-hover);
        transform: translateY(-1px);
        box-shadow: 0 4px 14px rgba(0, 194, 203, 0.35);
    }
    .br-footer-note {
        margin-top: 22px;
        padding-top: 20px;
        border-top: 1px solid var(--br-border);
        font-size: 0.8125rem;
        color: var(--br-text-muted);
        text-align: center;
    }
    .br-footer-note a,
    .br-footer-links a {
        color: var(--br-teal);
        font-weight: 600;
        text-decoration: none;
    }
    .br-footer-note a:hover,
    .br-footer-links a:hover {
        text-decoration: underline;
    }
    .br-footer-links {
        margin-top: 24px;
        padding-top: 20px;
        border-top: 1px solid var(--br-border);
        font-size: 0.875rem;
        text-align: center;
    }
    .br-form-group {
        margin-bottom: 22px;
    }
    .br-form-group label {
        display: block;
        font-weight: 600;
        margin-bottom: 8px;
        font-size: 0.9375rem;
        color: var(--br-text);
    }
    .br-form-group select {
        width: 100%;
        padding: 14px 16px;
        border: 1px solid var(--br-border);
        border-radius: var(--br-radius);
        font-size: 1rem;
        font-family: inherit;
        background: var(--br-white);
        color: var(--br-text);
    }
    .br-form-group select:focus {
        outline: none;
        border-color: var(--br-teal);
        box-shadow: 0 0 0 3px rgba(0, 194, 203, 0.22);
    }
    .br-sectors {
        display: flex;
        flex-wrap: wrap;
        gap: 12px 20px;
    }
    .br-sectors label {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 0;
        font-weight: 450;
        font-size: 0.9375rem;
        cursor: pointer;
        color: var(--br-text);
    }
    .br-sectors input {
        accent-color: var(--br-teal);
        width: 18px;
        height: 18px;
        margin: 0;
    }
    .br-success {
        background: rgba(0, 194, 203, 0.12);
        border: 1px solid var(--br-border);
        color: var(--br-text);
        padding: 14px 16px;
        border-radius: var(--br-radius);
        margin-bottom: 20px;
        font-size: 0.9375rem;
        font-weight: 500;
    }
    .br-body-text {
        font-size: 1rem;
        color: var(--br-text);
        text-align: center;
    }
    .br-muted {
        font-size: 0.875rem;
        color: var(--br-text-muted);
        margin-top: 16px;
        text-align: center;
    }
    form.br-form-reset {
        margin: 0;
    }
</style>
