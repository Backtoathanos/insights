<?php

namespace Acelle\Library;

/**
 * Build public Blackridge URLs for marketing API articles: {base}/{content_type}/{slug}
 */
final class MarketingArticleUrl
{
    /**
     * API category keys → URL path segment when article content_type is absent.
     *
     * @var array<string, string>
     */
    private const CATEGORY_PATH_MAP = [
        'latest_blogs' => 'blog',
        'project_profiles' => 'project-profiles',
        'project_news' => 'project-news',
        'industry_news' => 'industry-news',
    ];

    /**
     * Normalized API content_type values → URL path segment.
     *
     * @var array<string, string>
     */
    private const CONTENT_TYPE_PATH_MAP = [
        'blog' => 'blog',
        'latest_blogs' => 'blog',
        'latest-blogs' => 'blog',
        'project_profiles' => 'project-profiles',
        'project-profiles' => 'project-profiles',
        'project_news' => 'project-news',
        'project-news' => 'project-news',
        'industry_news' => 'industry-news',
        'industry-news' => 'industry-news',
    ];

    public static function siteBaseUrl(): string
    {
        return rtrim((string) config('newsletter.marketing.blog_url', 'https://www.blackridgeresearch.com'), '/');
    }

    /**
     * @param  array<string, mixed>  $article
     */
    public static function publicUrl(array $article, string $categoryKey): ?string
    {
        $slug = trim((string) ($article['slug'] ?? ''));
        if ($slug === '') {
            return null;
        }

        $segment = self::resolvePathSegment($article, $categoryKey);
        if ($segment === '') {
            return null;
        }

        return self::siteBaseUrl() . '/' . $segment . '/' . ltrim($slug, '/');
    }

    /**
     * @param  array<string, mixed>  $article
     */
    public static function linkLabel(array $article): string
    {
        $title = trim((string) ($article['title'] ?? ''));
        if ($title === '') {
            $title = 'Untitled';
        }
        $industry = trim((string) ($article['industry'] ?? ''));

        return $industry !== '' ? $industry . ' - ' . $title : $title;
    }

    /**
     * @param  array<string, mixed>  $article
     */
    private static function resolvePathSegment(array $article, string $categoryKey): string
    {
        $fromApi = strtolower(trim((string) ($article['content_type'] ?? '')));
        if ($fromApi !== '' && isset(self::CONTENT_TYPE_PATH_MAP[$fromApi])) {
            return self::CONTENT_TYPE_PATH_MAP[$fromApi];
        }
        if ($fromApi !== '') {
            return preg_replace('/[^a-z0-9\-]/', '-', $fromApi) ?? '';
        }

        return self::CATEGORY_PATH_MAP[$categoryKey] ?? 'blog';
    }
}
