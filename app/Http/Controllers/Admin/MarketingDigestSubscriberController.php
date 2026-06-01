<?php

namespace Acelle\Http\Controllers\Admin;

use Acelle\Http\Controllers\Controller;
use Acelle\Model\MarketingMailSendLog;
use Acelle\Model\NewsletterPreference;
use Acelle\Services\MarketingSendPipelineService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class MarketingDigestSubscriberController extends Controller
{
    public function index(Request $request)
    {
        $keyword = trim((string) $request->query('keyword', ''));
        $perPage = (int) $request->query('per_page', 50);
        if (!in_array($perPage, [25, 50, 100], true)) {
            $perPage = 50;
        }

        $query = NewsletterPreference::query();

        if ($keyword !== '') {
            $query->where(function ($q) use ($keyword) {
                $q->where('email', 'like', '%' . addcslashes($keyword, '%_\\') . '%')
                    ->orWhere('name', 'like', '%' . addcslashes($keyword, '%_\\') . '%');
            });
        }

        $allowedSorts = ['id', 'name', 'email', 'frequency', 'sectors', 'unsubscribed_at'];
        $sort = (string) $request->query('sort', 'id');
        if (!in_array($sort, $allowedSorts, true)) {
            $sort = 'id';
        }
        $direction = strtolower((string) $request->query('direction', 'desc'));
        $direction = $direction === 'asc' ? 'asc' : 'desc';

        $query->orderBy($sort, $direction);
        if ($sort !== 'id') {
            $query->orderBy('id', 'desc');
        }

        $preferences = $query->paginate($perPage)->appends($request->query());

        $viewData = [
            'preferences' => $preferences,
            'sort' => $sort,
            'sort_direction' => $direction,
        ];

        if ($request->ajax()) {
            return view('admin.marketing_digest_subscribers._list', $viewData);
        }

        return view('admin.marketing_digest_subscribers.index', $viewData);
    }

    public function pipeline(Request $request, MarketingSendPipelineService $pipeline)
    {
        $keyword = trim((string) $request->query('keyword', ''));
        $dateInput = (string) $request->query('date', '');

        $built = $pipeline->buildPipeline($dateInput, $keyword !== '' ? $keyword : null);

        return view('admin.marketing_digest_subscribers.pipeline', [
            'filter_date' => $built['filter_date'],
            'send_time_label' => $built['send_time_label'],
            'rows' => $built['rows'],
            'keyword' => $keyword,
            'date_value' => $built['filter_date']->toDateString(),
        ]);
    }

    public function cancelPipeline(Request $request, NewsletterPreference $preference, MarketingSendPipelineService $pipeline)
    {
        $request->validate([
            'date' => 'required|date',
        ]);

        try {
            $pipeline->cancelScheduledSend($preference, (string) $request->input('date'));
        } catch (\InvalidArgumentException $e) {
            return redirect()
                ->route('admin.live_subscribers.pipeline', ['date' => $request->input('date')])
                ->with('error', $e->getMessage());
        }

        return redirect()
            ->route('admin.live_subscribers.pipeline', ['date' => $request->input('date')])
            ->with('success', trans('messages.live_subscribers.pipeline_cancel_success'));
    }

    /**
     * JSON rows for marketing_mail_send_logs by preference email (modal).
     */
    public function sendLogs(NewsletterPreference $preference)
    {
        $admin = Auth::user()->admin;
        $timezone = $admin->getTimezone();

        $emailKey = self::normalizeEmailForLogLookup($preference->email);
        if ($emailKey === '') {
            return response()->json([
                'email' => $preference->email,
                'logs' => [],
            ]);
        }

        $driver = DB::connection()->getDriverName();
        $normalizedEmailSql = ($driver === 'pgsql')
            ? 'LOWER(TRIM(BOTH FROM email))'
            : 'LOWER(TRIM(email))';

        $logs = MarketingMailSendLog::query()
            ->whereRaw("{$normalizedEmailSql} = ?", [$emailKey])
            ->orderByDesc('sent_at')
            ->orderByDesc('id')
            ->limit(500)
            ->get();

        $payload = $logs->map(function (MarketingMailSendLog $log) use ($admin, $timezone) {
            $at = $log->sent_at instanceof Carbon
                ? $log->sent_at->copy()->timezone($timezone)
                : null;

            $ids = self::contentIdsFromLog($log);
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

    private static function normalizeEmailForLogLookup(?string $email): string
    {
        return strtolower(trim((string) $email));
    }

    /**
     * @return array<int, mixed>
     */
    private static function contentIdsFromLog(MarketingMailSendLog $log): array
    {
        $attrs = $log->getAttributes();
        $raw = $attrs['content_ids'] ?? null;
        if (is_string($raw) && $raw !== '') {
            $decoded = json_decode($raw, true);

            return is_array($decoded) ? $decoded : [];
        }

        $cast = $log->content_ids;

        return is_array($cast) ? $cast : [];
    }
}
