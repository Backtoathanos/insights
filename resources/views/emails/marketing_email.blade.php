<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Top stories for latest blogs - Blackridge Research</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        h1 { font-size: 22px; margin-bottom: 24px; color: #1a365d; }
        h2 { font-size: 16px; margin: 24px 0 12px; color: #2c5282; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; }
        .item { margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid #eee; }
        .item:last-child { border-bottom: none; }
        .item-title { font-weight: bold; font-size: 15px; margin-bottom: 4px; }
        .item-title a { color: #0066cc; text-decoration: none; }
        .item-date { font-size: 12px; color: #718096; margin-bottom: 6px; }
        .item-desc { font-size: 14px; color: #555; margin-bottom: 10px; }
        .btn-more { display: inline-block; padding: 8px 16px; background: #0066cc; color: #fff !important; text-decoration: none; border-radius: 4px; font-size: 13px; }
        .footer-actions { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 14px; }
        .footer-actions a { display: inline-block; padding: 10px 20px; margin: 5px 8px 5px 0; background: #0066cc; color: #fff !important; text-decoration: none; border-radius: 4px; }
        .footer-actions a.btn-unsubscribe { background: #718096; }
    </style>
</head>
<body>
    <h1>Top stories for latest blogs</h1>

    @foreach($categories as $category)
        <h2>{{ $category['label'] }}</h2>
        @foreach($category['articles'] as $article)
            <div class="item">
                <div class="item-title">{{ $article['title'] ?? 'Untitled' }}</div>
                <div class="item-date">{{ isset($article['published_at']) ? \Carbon\Carbon::parse($article['published_at'])->format('F j, Y') : '' }}</div>
                @if(!empty($article['excerpt']))
                    <div class="item-desc">{{ \Illuminate\Support\Str::limit($article['excerpt'], 120) }}</div>
                @elseif(!empty($article['title']))
                    <div class="item-desc">{{ \Illuminate\Support\Str::limit($article['title'], 120) }}</div>
                @endif
                <a href="{{ rtrim($blogUrl, '/') }}" class="btn-more">More</a>
            </div>
        @endforeach
    @endforeach

    <div class="footer-actions">
        <a href="{{ $blogUrl }}">Visit Blackridge Research</a>
    </div>
</body>
</html>
