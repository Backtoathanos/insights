<?php

namespace Acelle\Http\Controllers\Admin;

use Acelle\Http\Controllers\Controller;
use Acelle\Model\MarketingMailSendLog;
use Acelle\Model\NewsletterPreference;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MarketingDigestSubscriberController extends Controller
{
    public function index(Request $request)
    {
        $keyword = trim((string) $request->query('keyword', ''));

        $query = NewsletterPreference::query()->orderByDesc('id');

        if ($keyword !== '') {
            $query->where(function ($q) use ($keyword) {
                $q->where('email', 'like', '%' . addcslashes($keyword, '%_\\') . '%')
                    ->orWhere('name', 'like', '%' . addcslashes($keyword, '%_\\') . '%');
            });
        }

        $preferences = $query->paginate(50)->appends($request->query());

        return view('admin.marketing_digest_subscribers.index', [
            'preferences' => $preferences,
        ]);
    }

    /**
     * JSON rows for marketing_mail_send_logs by preference email (modal).
     */
    public function sendLogs(NewsletterPreference $preference)
    {
        $admin = Auth::user()->admin;
        $timezone = $admin->getTimezone();

        $logs = MarketingMailSendLog::query()
            ->where('email', $preference->email)
            ->orderByDesc('sent_at')
            ->orderByDesc('id')
            ->limit(500)
            ->get();

        $payload = $logs->map(function (MarketingMailSendLog $log) use ($admin, $timezone) {
            $at = $log->sent_at instanceof Carbon
                ? $log->sent_at->copy()->timezone($timezone)
                : null;

            $ids = is_array($log->content_ids) ? $log->content_ids : [];
            $name = $ids === []
                ? '—'
                : implode(', ', array_slice($ids, 0, 15)) . (count($ids) > 15 ? '…' : '');

            $statusKey = ($log->status === MarketingMailSendLog::STATUS_SENT)
                ? 'messages.marketing_digest.send_status.sent'
                : 'messages.marketing_digest.send_status.not_sent';

            $parts = array_filter([
                $log->batch_frequency ?: null,
                $log->batch_source ?: null,
                $log->content_date ?: null,
            ]);

            $contentType = $parts !== []
                ? implode(' · ', $parts)
                : trans('messages.marketing_digest.content_type_unknown');

            return [
                'date' => $at ? $admin->formatDateTime($at, 'date_full') : '—',
                'time' => $at ? $admin->formatDateTime($at, 'time_only') : '—',
                'content_type' => $contentType,
                'name' => $name,
                'status' => __($statusKey),
                'error_message' => $log->error_message,
            ];
        });

        return response()->json([
            'email' => $preference->email,
            'logs' => $payload,
        ]);
    }
}
