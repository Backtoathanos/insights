<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <title>Unsubscribe from Digest - Blackridge Research</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --br-primary: #1a365d;
            --br-primary-light: #2c5282;
            --br-accent: #e53e3e;
            --br-accent-hover: #c53030;
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
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
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
        .card-header h1 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 8px;
            letter-spacing: -0.02em;
        }
        .card-header p {
            font-size: 0.95rem;
            opacity: 0.9;
        }
        .card-body {
            padding: 32px 28px;
        }
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
        .confirm-text {
            font-size: 1rem;
            color: var(--br-text);
            margin-bottom: 28px;
            text-align: center;
        }
        .confirm-text strong {
            color: var(--br-primary);
        }
        .actions {
            display: flex;
            flex-direction: column;
            gap: 12px;
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
        .btn-secondary {
            background: var(--br-bg);
            color: var(--br-text);
            border: 1px solid var(--br-border);
        }
        .btn-secondary:hover {
            background: var(--br-border);
            color: var(--br-primary);
        }
        .footer-note {
            margin-top: 24px;
            padding-top: 20px;
            border-top: 1px solid var(--br-border);
            font-size: 0.875rem;
            color: var(--br-text-muted);
            text-align: center;
        }
        .footer-note a {
            color: var(--br-primary-light);
            text-decoration: none;
        }
        .footer-note a:hover {
            text-decoration: underline;
        }
        form {
            margin: 0;
        }
    </style>
</head>
<body>
    <div class="card">
        <div class="card-header">
            <h1>Unsubscribe from Digest</h1>
            <p>You're about to stop receiving our newsletter emails</p>
        </div>
        <div class="card-body">
            <div class="email-display">{{ $email }}</div>
            <p class="confirm-text">
                <strong>Are you sure</strong> you want to unsubscribe? You will no longer receive our digest emails with industry insights and updates.
            </p>
            <form method="post" action="{{ route('digest.do_unsubscribe.email', ['email' => $email]) }}" class="actions">
                @csrf
                <button type="submit" class="btn btn-primary">Yes, unsubscribe me</button>
                <a href="{{ route('digest.stayed_subscribed') }}" class="btn btn-secondary">No, keep me subscribed</a>
            </form>
        </div>
    </div>
</body>
</html>
