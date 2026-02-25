<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Digest Preferences - Blackridge Research</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 500px; margin: 50px auto; padding: 20px; }
        h1 { font-size: 20px; }
        p, label { margin: 10px 0; }
        .success { background: #d4edda; padding: 10px; border-radius: 4px; margin-bottom: 15px; }
        .sectors { display: flex; flex-wrap: wrap; gap: 8px; margin: 10px 0; }
        .sectors label { display: block; margin: 0; }
        .sectors input { margin-right: 5px; }
        button { padding: 10px 20px; background: #0066cc; color: #fff; border: none; border-radius: 4px; cursor: pointer; }
        a { color: #0066cc; }
    </style>
</head>
<body>
    <h1>Manage Digest Preferences</h1>
    <p>Email: <strong>{{ $preference->email }}</strong></p>

    @if(session('success'))
        <div class="success">{{ session('success') }}</div>
    @endif

    <form method="post" action="{{ route('digest.save_preferences', $preference->token) }}">
        @csrf

        <div>
            <label>Frequency</label>
            <select name="frequency">
                <option value="daily" {{ $preference->frequency === 'daily' ? 'selected' : '' }}>Daily</option>
                <option value="weekly" {{ $preference->frequency === 'weekly' ? 'selected' : '' }}>Weekly</option>
            </select>
        </div>

        <div>
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

        <button type="submit">Save preferences</button>
    </form>

    <p style="margin-top: 20px;"><a href="{{ route('digest.unsubscribe', $preference->token) }}">Unsubscribe</a> · <a href="{{ url('/') }}">Homepage</a></p>
</body>
</html>
