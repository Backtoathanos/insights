<?php

namespace Acelle\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class NewsletterPreference extends Model
{
    protected $table = 'newsletter_preferences';

    protected $fillable = [
        'email',
        'name',
        'frequency',
        'sectors',
        'unsubscribed_at',
        'token',
        'subscriber_data_id',
    ];

    protected $casts = [
        'sectors' => 'array',
        'unsubscribed_at' => 'datetime',
    ];

    public const FREQUENCY_DAILY = 'daily';
    public const FREQUENCY_WEEKLY = 'weekly';

    public function isSubscribed(): bool
    {
        return is_null($this->unsubscribed_at);
    }

    public function unsubscribe(): void
    {
        $this->unsubscribed_at = now();
        $this->save();
    }

    public function resubscribe(): void
    {
        $this->unsubscribed_at = null;
        $this->save();
    }

    public static function generateToken(): string
    {
        return Str::random(48);
    }

    public static function findActiveByToken(string $token): ?self
    {
        return static::where('token', $token)->first();
    }

    public static function findActiveByEmail(string $email): ?self
    {
        return static::where('email', $email)->whereNull('unsubscribed_at')->first();
    }

    public function scopeSubscribed($query)
    {
        return $query->whereNull('unsubscribed_at');
    }

    public function scopeDueForDigest($query, string $frequency, $dayOfWeek = null)
    {
        if ($frequency === self::FREQUENCY_DAILY) {
            return $query->where('frequency', self::FREQUENCY_DAILY);
        }
        // Weekly: only return subscribers when today is the send day (Monday=1 in date('w'))
        $today = (int) date('w'); // 0=Sun, 1=Mon, ..., 6=Sat
        $sendDay = $dayOfWeek ?? 1; // Monday
        if ($today !== $sendDay) {
            return $query->whereRaw('1 = 0'); // no results
        }
        return $query->where('frequency', self::FREQUENCY_WEEKLY);
    }

    /**
     * Marketing mail should run for this row when the daily cron fires once per day.
     * Daily frequency: every run. Weekly frequency: only on {@see resolveMarketingWeeklySendDay()}.
     */
    public function shouldReceiveMarketingMailToday(): bool
    {
        if (!$this->isSubscribed()) {
            return false;
        }
        $freq = $this->frequency ?: self::FREQUENCY_WEEKLY;
        if ($freq === self::FREQUENCY_DAILY) {
            return true;
        }
        $target = self::resolveMarketingWeeklySendDay();
        $today = (int) now()->format('w');

        return $today === $target;
    }

    /**
     * Config newsletter.marketing.weekly_send_day: 0–6 (PHP date('w'), Sun=0) or weekday name (e.g. sunday, thursday).
     */
    public static function resolveMarketingWeeklySendDay(): int
    {
        $v = config('newsletter.marketing.weekly_send_day', 'sunday');
        if (is_numeric($v)) {
            return ((int) $v) % 7;
        }
        $map = [
            'sun' => 0, 'sunday' => 0,
            'mon' => 1, 'monday' => 1,
            'tue' => 2, 'tues' => 2, 'tuesday' => 2,
            'wed' => 3, 'weds' => 3, 'wednesday' => 3,
            'thu' => 4, 'thur' => 4, 'thurs' => 4, 'thursday' => 4,
            'fri' => 5, 'friday' => 5,
            'sat' => 6, 'saturday' => 6,
        ];
        $k = strtolower(trim((string) $v));

        return $map[$k] ?? 0;
    }
}
