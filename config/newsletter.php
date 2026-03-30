<?php

return [
    // Checkbox list for digest preferences (order preserved).
    'sectors' => [
        'Oil & Gas',
        'Power',
        'Utilities',
        'Industrial',
        'Infrastructure',
        'Construction',
        'Data Centers',
        'Chemical',
        'Hydrogen',
        'Mining',
        'CCUS',
        'Electric Vehicles',
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
        // Map user sectors to API categories for filtering. "All" = all categories.
        'sector_to_category' => [
            'Oil & Gas' => ['industry_news', 'project_news'],
            'Power' => ['industry_news', 'project_profiles', 'project_news'],
            'Utilities' => ['industry_news', 'project_profiles'],
            'Industrial' => ['industry_news', 'project_profiles'],
            'Infrastructure' => ['industry_news', 'project_profiles', 'project_news'],
            'Construction' => ['industry_news', 'project_profiles', 'project_news'],
            'Data Centers' => ['industry_news', 'project_news'],
            'Chemical' => ['industry_news', 'project_profiles'],
            'Hydrogen' => ['industry_news', 'project_news'],
            'Mining' => ['industry_news', 'project_news'],
            'CCUS' => ['industry_news', 'project_news'],
            'Electric Vehicles' => ['industry_news', 'project_news'],
        ],
    ],
];
