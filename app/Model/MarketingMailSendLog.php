<?php

namespace Acelle\Model;

use Illuminate\Database\Eloquent\Model;

/**
 * Tracks marketing newsletter sends (success + failures) per recipient.
 *
 * @property int $id
 * @property string $email
 * @property array<int>|null $content_ids
 * @property \Carbon\Carbon|null $sent_at
 * @property string|null $content_date
 * @property string|null $batch_frequency
 * @property string $batch_source
 * @property int $status
 * @property string|null $error_message
 */
class MarketingMailSendLog extends Model
{
    protected $table = 'marketing_mail_send_logs';

    protected $fillable = [
        'email',
        'content_ids',
        'sent_at',
        'content_date',
        'batch_frequency',
        'batch_source',
        'status',
        'error_message',
    ];

    protected $casts = [
        'content_ids' => 'array',
        'sent_at' => 'datetime',
        'status' => 'integer',
    ];

    public const STATUS_NOT_SENT = 0;

    public const STATUS_SENT = 1;

    public const SOURCE_CRON = 'cron';

    public const SOURCE_TEST = 'test';
}
