<?php

namespace Database\Seeders;

use Acelle\Model\DigestContentItem;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class DigestContentSeeder extends Seeder
{
    public function run()
    {
        $today = Carbon::today();

        $items = [
            ['type' => 'blog', 'sector' => 'Energy', 'title' => 'Renewable Energy Trends 2026', 'url' => 'https://example.com/blog/1', 'excerpt' => 'Key trends in solar and wind adoption.', 'published_at' => $today],
            ['type' => 'news', 'sector' => 'Technology', 'title' => 'AI in Manufacturing', 'url' => 'https://example.com/news/1', 'excerpt' => 'How AI is transforming production lines.', 'published_at' => $today],
            ['type' => 'project_tracker', 'sector' => 'Energy', 'title' => 'New Solar Farm Project - India', 'url' => 'https://example.com/tracker/1', 'excerpt' => '500 MW solar project announced.', 'published_at' => $today],
            ['type' => 'blog', 'sector' => null, 'title' => 'Global Market Overview', 'url' => 'https://example.com/blog/2', 'excerpt' => 'Quarterly market insights.', 'published_at' => $today],
            ['type' => 'news', 'sector' => 'Healthcare', 'title' => 'Healthcare Digitalization', 'url' => 'https://example.com/news/2', 'excerpt' => 'Digital health initiatives expand.', 'published_at' => $today],
        ];

        foreach ($items as $item) {
            DigestContentItem::firstOrCreate(
                ['title' => $item['title'], 'published_at' => $item['published_at']],
                $item
            );
        }
    }
}
