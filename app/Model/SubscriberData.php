<?php

namespace Acelle\Model;

use Illuminate\Database\Eloquent\Model;

class SubscriberData extends Model
{
    protected $table = 'subscribers_data';

    protected $fillable = [
        'source',
        'event',
        'verified_at',
        'enquiry_id',
        'name',
        'email',
        'phone',
        'company',
        'country',
        'interest',
        'message',
        'page',
        'type',
        'created_date',
        'state',
        'gclid',
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_term',
        'utm_content',
        'ip_address',
        'user_agent',
        'payload',
    ];

    protected $casts = [
        'verified_at' => 'datetime',
        'created_date' => 'datetime',
    ];
}

