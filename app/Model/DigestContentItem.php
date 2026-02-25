<?php

namespace Acelle\Model;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class DigestContentItem extends Model
{
    protected $table = 'digest_content_items';

    protected $fillable = [
        'type',
        'sector',
        'title',
        'url',
        'excerpt',
        'published_at',
        'source',
    ];

    protected $casts = [
        'published_at' => 'datetime',
    ];

    public const TYPE_BLOG = 'blog';
    public const TYPE_NEWS = 'news';
    public const TYPE_PROJECT_TRACKER = 'project_tracker';

    public function scopeForDate($query, $date = null)
    {
        $date = $date ? Carbon::parse($date) : now();
        return $query->whereDate('published_at', $date->toDateString());
    }

    public function scopeForSectors($query, array $sectors)
    {
        // Always include items with null sector (general)
        return $query->where(function ($q) use ($sectors) {
            $q->whereNull('sector');
            if (!empty($sectors)) {
                $q->orWhereIn('sector', $sectors);
            }
        });
    }

    public function scopeByType($query, string $type)
    {
        return $query->where('type', $type);
    }

    public static function getForDigest(array $sectors, $date = null, int $limit = 5)
    {
        $date = $date ? Carbon::parse($date) : now();
        return static::query()
            ->forDate($date)
            ->forSectors($sectors)
            ->orderByDesc('published_at')
            ->limit($limit)
            ->get();
    }

    public static function getForShowMore(array $sectors, $date = null, int $limit = 50)
    {
        $date = $date ? Carbon::parse($date) : now();
        return static::query()
            ->forDate($date)
            ->forSectors($sectors)
            ->orderByDesc('published_at')
            ->limit($limit)
            ->get();
    }
}
