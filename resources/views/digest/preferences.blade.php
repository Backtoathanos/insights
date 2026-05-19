<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <title>Manage Digest Preferences - Blackridge Research</title>
    @include('digest.partials.br_digest_theme')
</head>
<body class="br-digest-ui">
    <div class="br-site-bar">Blackridge Research &amp; Consulting</div>
    <div class="br-wrap">
        <div class="br-card">
            <div class="br-card-header">
                <h1>Manage Digest Preferences</h1>
                <p>Choose your frequency and sectors</p>
            </div>
            <div class="br-card-body">
                <div class="br-email-display">{{ $preference->email }}</div>

                @if(session('success'))
                    <div class="br-success">{{ session('success') }}</div>
                @endif

                <form method="post" action="{{ $useEmailUrl ?? false ? route('digest.save_preferences.email', ['email' => $preference->email]) : route('digest.save_preferences', $preference->token) }}" class="br-form-reset">
                    @csrf

                    <div class="br-form-group">
                        <label>Frequency</label>
                        <select name="frequency">
                            <option value="daily" {{ ($preference->frequency ?? 'daily') === 'daily' ? 'selected' : '' }}>Daily</option>
                            <option value="weekly" {{ ($preference->frequency ?? '') === 'weekly' ? 'selected' : '' }}>Weekly</option>
                        </select>
                    </div>

                    <div class="br-form-group">
                        <label>Sectors to receive</label>
                        <div class="br-sectors">
                            @foreach($sectors as $sector)
                                <label>
                                    <input type="checkbox" name="sectors[]" value="{{ $sector }}"
                                        {{ in_array($sector, $selectedSectors ?? []) ? 'checked' : '' }}>
                                    {{ $sector }}
                                </label>
                            @endforeach
                        </div>
                    </div>

                    <button type="submit" class="br-btn br-btn-primary">Save preferences</button>
                </form>

                <p class="br-footer-links">
                    <a href="{{ $useEmailUrl ?? false ? route('digest.unsubscribe.email', ['email' => $preference->email]) : route('digest.unsubscribe', $preference->token) }}">Unsubscribe</a>
                </p>
            </div>
        </div>
    </div>
</body>
</html>
