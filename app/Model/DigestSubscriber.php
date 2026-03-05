<?php

namespace Acelle\Model;

use Illuminate\Database\Eloquent\Model;

class DigestSubscriber extends Model
{
    protected $table = 'digest_subscribers';

    protected $fillable = [
        'email',
        'name',
        'ip',
        'subscription_type',
        'verification_status',
        'verified_at',
    ];

    protected $casts = [
        'verified_at' => 'datetime',
    ];

    public static function findByEmail(string $email): ?self
    {
        return static::where('email', $email)->first();
    }

    public static function existsByEmail(string $email): bool
    {
        return static::where('email', $email)->exists();
    }
}
