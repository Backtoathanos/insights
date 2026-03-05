<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <title>Manage Digest Preferences - Blackridge Research</title>
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
            --br-success: #38a169;
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
        .card-header h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 8px; letter-spacing: -0.02em; }
        .card-header p { font-size: 0.95rem; opacity: 0.9; }
        .card-body { padding: 32px 28px; }
        .email-display {
            background: var(--br-bg);
            border: 1px solid var(--br-border);
            border-radius: var(--br-radius);
            padding: 16px 20px;
            margin-bottom: 24px;
            font-weight: 500;
            color: var(--br-primary);
            word-break: break-all;
        }
        .success {
            background: #c6f6d5;
            color: #22543d;
            padding: 12px 16px;
            border-radius: var(--br-radius);
            margin-bottom: 20px;
            font-size: 0.95rem;
        }
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; font-weight: 600; margin-bottom: 8px; font-size: 0.95rem; }
        .form-group select {
            width: 100%;
            padding: 12px 16px;
            border: 1px solid var(--br-border);
            border-radius: var(--br-radius);
            font-size: 1rem;
            font-family: inherit;
        }
        .sectors {
            display: flex;
            flex-wrap: wrap;
            gap: 12px 20px;
        }
        .sectors label {
            display: flex;
            align-items: center;
            gap: 8px;
            margin: 0;
            font-weight: 400;
            cursor: pointer;
        }
        .sectors input { margin: 0; }
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
            background: var(--br-accent);
            color: white;
        }
        .btn:hover {
            background: var(--br-accent-hover);
            transform: translateY(-1px);
            box-shadow: var(--br-shadow);
        }
        .footer-links {
            margin-top: 24px;
            padding-top: 20px;
            border-top: 1px solid var(--br-border);
            font-size: 0.875rem;
            text-align: center;
        }
        .footer-links a { color: var(--br-primary-light); text-decoration: none; }
        .footer-links a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="card">
        <div class="card-header">
            <h1>Manage Digest Preferences</h1>
            <p>Choose your frequency and sectors</p>
        </div>
        <div class="card-body">
            <div class="email-display">{{ $preference->email }}</div>

            @if(session('success'))
                <div class="success">{{ session('success') }}</div>
            @endif

            <form method="post" action="{{ $useEmailUrl ?? false ? route('digest.save_preferences.email', ['email' => $preference->email]) : route('digest.save_preferences', $preference->token) }}">
                @csrf

                <div class="form-group">
                    <label>Frequency</label>
                    <select name="frequency">
                        <option value="daily" {{ $preference->frequency === 'daily' ? 'selected' : '' }}>Daily</option>
                        <option value="weekly" {{ $preference->frequency === 'weekly' ? 'selected' : '' }}>Weekly</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Sectors to receive</label>
                    <div class="sectors">
                        @foreach($sectors as $sector)
                            <label>
                                <input type="checkbox" name="sectors[]" value="{{ $sector }}"
                                    {{ in_array($sector, $preference->sectors ?? []) ? 'checked' : '' }}>
                                {{ $sector }}
                            </label>
                        @endforeach
                    </div>
                </div>

                <button type="submit" class="btn">Save preferences</button>
            </form>

            <p class="footer-links">
                <a href="{{ $useEmailUrl ?? false ? route('digest.unsubscribe.email', ['email' => $preference->email]) : route('digest.unsubscribe', $preference->token) }}">Unsubscribe</a>
            </p>
        </div>
    </div>
</body>
</html>
