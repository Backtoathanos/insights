<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Top stories for latest blogs - Blackridge Research</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; }
        .wrapper { max-width: 600px; margin: 0 auto; }
        h1 { font-size: 22px; margin-bottom: 24px; color: #1a365d; text-align: center; }
        h2 { font-size: 16px; margin: 24px 0 12px; color: #2c5282; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; }
        .item { margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid #eee; }
        .item:last-child { border-bottom: none; }
        .item-table { width: 100%; border-collapse: collapse; }
        .item-table td { vertical-align: top; padding: 0 0 8px 0; }
        .item-image { width: 80px; padding-right: 16px; }
        .item-image img { width: 80px; height: 60px; object-fit: cover; border-radius: 4px; display: block; }
        .item-content { }
        .item-title { font-weight: bold; font-size: 15px; margin-bottom: 4px; }
        .item-title a { color: #0066cc; text-decoration: none; }
        .item-date { font-size: 12px; color: #718096; margin-bottom: 6px; }
        .item-desc { font-size: 14px; color: #555; margin-bottom: 0; }
        .item-desc .view-more { color: #0066cc; text-decoration: none; font-weight: 500; white-space: nowrap; }
        .show-more-wrap { text-align: center; margin: 28px 0; }
        .btn-show-more { display: inline-block; padding: 10px 24px; background: #0066cc; color: #fff !important; text-decoration: none; border-radius: 4px; font-size: 14px; font-weight: 600; }
        .footer-actions { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 14px; text-align: center; }
        .footer-actions a { display: inline-block; padding: 10px 20px; margin: 5px 8px; background: #0066cc; color: #fff !important; text-decoration: none; border-radius: 4px; }
        .footer-actions a.btn-unsubscribe { background: #718096; }
    </style>
</head>
<body>
    <div class="wrapper">
        <h1>Top stories for latest blogs</h1>

        @foreach($categories as $category)
            <h2>{{ $category['label'] }}</h2>
            @foreach($category['articles'] as $article)
                @php
                    $title = $article['title'] ?? 'Untitled';
                    $articleUrl = $article['url'] ?? '';
                    $descText = !empty($article['description']) ? $article['description'] : $title;
                    $truncated = \Illuminate\Support\Str::limit($descText, 80);
                @endphp
                <div class="item">
                    <table class="item-table">
                        <tr>
                            <td class="item-image">
                                @if(!empty($article['image']))
                                    <a href="{{ $articleUrl }}"><img src="{{ $article['image'] }}" alt="" width="80" height="60"></a>
                                @else
                                    &nbsp;
                                @endif
                            </td>
                            <td class="item-content">
                                <div class="item-title">{{ $title }}</div>
                                <div class="item-date">{{ isset($article['published_at']) ? \Carbon\Carbon::parse($article['published_at'])->format('F j, Y') : '' }}</div>
                                <div class="item-desc">
                                    {{ $truncated }}....<a href="{{ $articleUrl }}" class="view-more">View more</a>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            @endforeach
        @endforeach

        <div class="show-more-wrap">
            <a href="{{ $blogUrl }}" class="btn-show-more">Show more</a>
        </div>

        @if($recipientEmail)
        <div class="footer-actions">
            <a href="{{ url('digest/preferences/email/' . rawurlencode($recipientEmail)) }}">Change preference</a>
            <a href="{{ url('digest/unsubscribe/' . rawurlencode($recipientEmail)) }}" class="btn-unsubscribe">Unsubscribe</a>
        </div>
        @endif
    </div>
</body>
</html>
