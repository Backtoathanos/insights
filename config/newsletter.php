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
        'mail_list_id' => env('NEWSLETTER_DIGEST_MAIL_LIST_ID'), // optional: sync to brsubscribers
    ],

    'marketing' => [
        'api_url' => env('MARKETING_ARTICLES_API_URL', 'https://staging-api.blackridgeresearch.com/articles/sections'),
        'api_token' => env('MARKETING_ARTICLES_API_TOKEN', 'secret-token'),
        'blog_url' => env('MARKETING_BLOG_URL', 'https://www.blackridgeresearch.com/'),
        'categories' => [
            'latest_blogs' => 'Latest Blogs',
            'project_profiles' => 'Project Profiles',
            'project_news' => 'Project News',
            'industry_news' => 'Industry News',
        ],
    ],
];
