<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <title>Marketing Email Test - Blackridge Research</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --br-primary: #1a365d;
            --br-primary-light: #2c5282;
            --br-accent: #2b6cb0;
            --br-accent-hover: #2c5282;
            --br-text: #2d3748;
            --br-text-muted: #718096;
            --br-border: #e2e8f0;
            --br-bg: #f7fafc;
            --br-white: #ffffff;
            --br-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            --br-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            --br-radius: 12px;
            --br-radius-lg: 16px;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 50%, #e2e8f0 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
            color: var(--br-text);
            line-height: 1.6;
        }
        .card {
            background: var(--br-white);
            border-radius: var(--br-radius-lg);
            box-shadow: var(--br-shadow-lg);
            max-width: 480px;
            width: 100%;
            overflow: hidden;
        }
        .card-header {
            background: linear-gradient(135deg, var(--br-primary) 0%, var(--br-primary-light) 100%);
            color: white;
            padding: 32px 28px;
            text-align: center;
        }
        .card-header h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 8px; }
        .card-header p { font-size: 0.95rem; opacity: 0.9; }
        .card-body { padding: 32px 28px; }
        .form-group { margin-bottom: 20px; }
        .form-group label {
            display: block;
            font-weight: 600;
            margin-bottom: 8px;
            color: var(--br-text);
        }
        .form-group input {
            width: 100%;
            padding: 12px 16px;
            font-size: 1rem;
            border: 1px solid var(--br-border);
            border-radius: var(--br-radius);
            font-family: inherit;
        }
        .form-group input:focus {
            outline: none;
            border-color: var(--br-primary-light);
            box-shadow: 0 0 0 3px rgba(44, 82, 130, 0.2);
        }
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 14px 24px;
            font-size: 1rem;
            font-weight: 600;
            font-family: inherit;
            border-radius: var(--br-radius);
            text-decoration: none;
            border: none;
            cursor: pointer;
            transition: all 0.2s ease;
            width: 100%;
        }
        .btn-primary {
            background: var(--br-accent);
            color: white;
        }
        .btn-primary:hover {
            background: var(--br-accent-hover);
            transform: translateY(-1px);
            box-shadow: var(--br-shadow);
        }
        .alert {
            padding: 14px 18px;
            border-radius: var(--br-radius);
            margin-bottom: 20px;
            font-size: 0.95rem;
        }
        .alert-success { background: #c6f6d5; color: #22543d; border: 1px solid #9ae6b4; }
        .alert-error { background: #fed7d7; color: #742a2a; border: 1px solid #feb2b2; }
        .footer-note {
            margin-top: 24px;
            padding-top: 20px;
            border-top: 1px solid var(--br-border);
            font-size: 0.875rem;
            color: var(--br-text-muted);
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="card">
        <div class="card-header">
            <h1>Marketing Email Test</h1>
            <p>Send a test marketing email to a single address</p>
        </div>
        <div class="card-body">
            @if(session('success'))
                <div class="alert alert-success">{{ session('success') }}</div>
            @endif
            @if(session('error'))
                <div class="alert alert-error">{{ session('error') }}</div>
            @endif

            <form method="post" action="{{ route('digest.marketing_mail_check.submit') }}">
                @csrf
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" id="email" name="email" value="{{ old('email') }}" placeholder="your@email.com" required>
                    @error('email')
                        <span style="color: #e53e3e; font-size: 0.875rem; margin-top: 4px; display: block;">{{ $message }}</span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="frequency">Batch type</label>
                    <select id="frequency" name="frequency" style="width:100%;padding:12px 16px;border:1px solid var(--br-border);border-radius:var(--br-radius);font-size:1rem;font-family:inherit;">
                        <option value="daily" {{ old('frequency', 'daily') === 'daily' ? 'selected' : '' }}>Daily (single API date)</option>
                        <option value="weekly" {{ old('frequency') === 'weekly' ? 'selected' : '' }}>Weekly (up to 5 API dates backward)</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="date">Date override (optional, DD-MM-YYYY)</label>
                    <input type="text" id="date" name="date" value="{{ old('date') }}" placeholder="Leave empty: daily uses yesterday">
                </div>
                <button type="submit" class="btn btn-primary">Send test email</button>
            </form>

            <p class="footer-note">
                Matches cron behaviour: daily uses yesterday unless you set a date; weekly merges up to five prior days until all sections have content.
            </p>
        </div>
    </div>
</body>
</html>
