<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <title>Unsubscribe from Digest - Blackridge Research</title>
    @include('digest.partials.br_digest_theme')
</head>
<body class="br-digest-ui">
    <div class="br-site-bar">Blackridge Research &amp; Consulting</div>
    <div class="br-wrap">
        <div class="br-card">
            <div class="br-card-header">
                <h1>Unsubscribe from Digest</h1>
                <p>Confirm below or update your preferences instead</p>
            </div>
            <div class="br-card-body">
                <div class="br-email-display">{{ $preference->email }}</div>
                <p class="br-confirm-text">
                    <strong>Are you sure</strong> you want to unsubscribe from our digest emails?
                </p>
                <form method="post" action="{{ route('digest.do_unsubscribe', $preference->token) }}" class="br-actions br-form-reset">
                    @csrf
                    <button type="submit" class="br-btn br-btn-primary">Yes, unsubscribe me</button>
                    <a href="{{ route('digest.preferences', $preference->token) }}" class="br-btn br-btn-secondary">Change preferences instead</a>
                </form>
            </div>
        </div>
    </div>
</body>
</html>
