<?php

return [
    'sectors' => [
        'Energy',
        'Technology',
        'Healthcare',
        'Manufacturing',
        'Automotive',
        'Aerospace',
        'Defense',
        'Construction',
        'Chemicals',
        'Food & Beverage',
        'Others',
    ],

    'links' => [
        'blog' => env('NEWSLETTER_BLOG_URL', 'https://insights.blackridgeresearch.org/blog'),
        'news' => env('NEWSLETTER_NEWS_URL', 'https://insights.blackridgeresearch.org/news'),
        'project_tracker' => env('NEWSLETTER_PROJECT_TRACKER_URL', 'https://insights.blackridgeresearch.org/global-project-tracker'),
    ],

    'digest' => [
        'items_in_email' => 5,
        'show_more_threshold' => 5,
    ],
];
