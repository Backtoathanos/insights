<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More items - Blackridge Research</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 700px; margin: 30px auto; padding: 20px; }
        h1 { font-size: 22px; }
        .item { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #eee; }
        .item-title { font-weight: bold; font-size: 16px; }
        .item-title a { color: #0066cc; text-decoration: none; }
        .item-excerpt { font-size: 14px; color: #555; margin-top: 5px; }
        .item-meta { font-size: 12px; color: #888; margin-top: 4px; }
        .footer-links { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; }
        .footer-links a { color: #0066cc; margin-right: 15px; }
    </style>
</head>
<body>
    <h1>More items for {{ $date }}</h1>
    @if(!empty($sectors))
        <p>Sectors: {{ implode(', ', $sectors) }}</p>
    @endif

    @if($items->isEmpty())
        <p>No items found for this date and sector selection.</p>
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
                    <div class="item-excerpt">{{ $item->excerpt }}</div>
                @endif
                <div class="item-meta">{{ ucfirst(str_replace('_', ' ', $item->type)) }}{!! $item->sector ? ' · ' . e($item->sector) : '' !!}</div>
            </div>
        @endforeach
    @endif

    <div class="footer-links">
        <a href="{{ config('newsletter.links.blog') }}">Blog</a>
        <a href="{{ config('newsletter.links.news') }}">News</a>
        <a href="{{ config('newsletter.links.project_tracker') }}">Global Project Tracker</a>
        <a href="{{ url('/') }}">Homepage</a>
    </div>
</body>
</html>
