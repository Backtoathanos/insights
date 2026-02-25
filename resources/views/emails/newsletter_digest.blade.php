<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Digest - Blackridge Research</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        h1 { font-size: 20px; margin-bottom: 20px; }
        .item { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #eee; }
        .item:last-child { border-bottom: none; }
        .item-title { font-weight: bold; font-size: 16px; margin-bottom: 5px; }
        .item-title a { color: #0066cc; text-decoration: none; }
        .item-excerpt { font-size: 14px; color: #555; }
        .item-type { font-size: 12px; color: #888; margin-top: 4px; }
        .show-more { margin: 25px 0; text-align: center; }
        .show-more a { display: inline-block; padding: 10px 20px; background: #0066cc; color: #fff !important; text-decoration: none; border-radius: 4px; }
        .footer-links { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 14px; }
        .footer-links a { color: #0066cc; text-decoration: none; margin-right: 15px; }
        .footer-unsubscribe { margin-top: 15px; font-size: 12px; color: #888; }
    </style>
</head>
<body>
    <h1>Hi {{ $preference->name ?: 'there' }},</h1>
    <p>Here's your {{ ucfirst($preference->frequency) }} digest from Blackridge Research.</p>

    @if($items->isEmpty())
        <p>No new items match your selected sectors today. Check back later!</p>
    @else
        @foreach($items as $item)
            <div class="item">
                <div class="item-title">
                    @if($item->url)
                        <a href="{{ $item->url }}">{{ $item->title }}</a>
                    @else
                        {{ $item->title }}
                    @endif
                </div>
                @if($item->excerpt)
                    <div class="item-excerpt">{{ Str::limit($item->excerpt, 120) }}</div>
                @endif
                <div class="item-type">{{ ucfirst(str_replace('_', ' ', $item->type)) }}{!! $item->sector ? ' · ' . e($item->sector) : '' !!}</div>
            </div>
        @endforeach

        @if($hasMore)
            <div class="show-more">
                <a href="{{ $showMoreUrl }}">Show more</a>
            </div>
        @endif
    @endif

    <div class="footer-links">
        <strong>Explore more:</strong><br>
        <a href="{{ $links['blog'] ?? '#' }}">Blog</a>
        <a href="{{ $links['news'] ?? '#' }}">News</a>
        <a href="{{ $links['project_tracker'] ?? '#' }}">Global Project Tracker</a>
    </div>

    <div class="footer-unsubscribe">
        <a href="{{ url('digest/preferences/' . $preference->token) }}">Change preferences</a> ·
        <a href="{{ url('digest/unsubscribe/' . $preference->token) }}">Unsubscribe</a>
    </div>
</body>
</html>
