<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unsubscribe - Blackridge Research</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 500px; margin: 50px auto; padding: 20px; }
        h1 { font-size: 20px; }
        p { margin: 15px 0; }
        .btn { display: inline-block; padding: 10px 20px; background: #c00; color: #fff; text-decoration: none; border-radius: 4px; }
        .btn-secondary { background: #666; margin-left: 10px; }
    </style>
</head>
<body>
    <h1>Unsubscribe from digest</h1>
    <p>You are subscribed as: <strong>{{ $preference->email }}</strong></p>
    <p>Are you sure you want to unsubscribe from our digest emails?</p>
    <form method="post" action="{{ route('digest.do_unsubscribe', $preference->token) }}" style="margin-top: 20px;">
        @csrf
        <button type="submit" class="btn">Yes, unsubscribe</button>
        <a href="{{ route('digest.preferences', $preference->token) }}" class="btn btn-secondary">Change preferences instead</a>
    </form>
</body>
</html>
