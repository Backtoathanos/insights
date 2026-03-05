<?php

namespace Acelle\Http\Controllers;

use Acelle\Model\SubscriberData;
use Acelle\Model\NewsletterPreference;
use Acelle\Model\DigestSubscriber;
use Acelle\Model\Subscriber;
use Acelle\Model\MailList;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class InsightsReceiveController extends Controller
{
    public function receive(Request $request)
    {
        $expectedSecret = (string) config('services.insights_webhook_secret', '');
        $providedSecret = (string) $request->header('X-Webhook-Secret', '');

        if ($expectedSecret !== '') {
            if ($providedSecret === '' || !hash_equals($expectedSecret, $providedSecret)) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
        }

        // Accept JSON (preferred) or regular form posts
        $payload = $request->json()->all();
        if (empty($payload)) {
            $payload = $request->all();
        }

        $validator = Validator::make($payload, [
            'source' => ['nullable', 'string', 'max:255'],
            'event' => ['required', 'string', 'max:255'],
            'verified_at' => ['nullable', 'string', 'max:255'],
            'enquiry' => ['required', 'array'],
            'enquiry.id' => ['nullable'],
            'enquiry.name' => ['nullable', 'string', 'max:255'],
            'enquiry.email' => ['required', 'string', 'max:255'],
            'enquiry.phone' => ['nullable', 'string', 'max:255'],
            'enquiry.company' => ['nullable', 'string', 'max:255'],
            'enquiry.country' => ['nullable', 'string', 'max:10'],
            'enquiry.interest' => ['nullable', 'string', 'max:255'],
            'enquiry.message' => ['nullable', 'string'],
            'enquiry.page' => ['nullable', 'string', 'max:255'],
            'enquiry.type' => ['nullable', 'string', 'max:255'],
            'enquiry.created_date' => ['nullable', 'string', 'max:255'],
            'enquiry.state' => ['nullable', 'string', 'max:255'],
            'enquiry.gclid' => ['nullable', 'string', 'max:255'],
            'enquiry.utm_source' => ['nullable', 'string', 'max:255'],
            'enquiry.utm_medium' => ['nullable', 'string', 'max:255'],
            'enquiry.utm_campaign' => ['nullable', 'string', 'max:255'],
            'enquiry.utm_term' => ['nullable', 'string', 'max:255'],
            'enquiry.utm_content' => ['nullable', 'string', 'max:255'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => 'Validation failed',
                'details' => $validator->errors(),
            ], 422);
        }

        if (($payload['event'] ?? null) !== 'email_verified') {
            return response()->json(['error' => 'Unsupported event'], 400);
        }

        $enquiry = $payload['enquiry'] ?? [];

        $verifiedAt = null;
        if (!empty($payload['verified_at'])) {
            try {
                $verifiedAt = Carbon::parse($payload['verified_at']);
            } catch (\Throwable $e) {
                $verifiedAt = null;
            }
        }

        $createdDate = null;
        if (!empty($enquiry['created_date'])) {
            try {
                $createdDate = Carbon::parse($enquiry['created_date']);
            } catch (\Throwable $e) {
                $createdDate = null;
            }
        }

        $row = SubscriberData::create([
            'source' => $payload['source'] ?? null,
            'event' => $payload['event'] ?? null,
            'verified_at' => $verifiedAt,
            'enquiry_id' => is_numeric($enquiry['id'] ?? null) ? (int) $enquiry['id'] : null,
            'name' => $enquiry['name'] ?? null,
            'email' => $enquiry['email'] ?? null,
            'phone' => $enquiry['phone'] ?? null,
            'company' => $enquiry['company'] ?? null,
            'country' => $enquiry['country'] ?? null,
            'interest' => $enquiry['interest'] ?? null,
            'message' => $enquiry['message'] ?? null,
            'page' => $enquiry['page'] ?? null,
            'type' => $enquiry['type'] ?? null,
            'created_date' => $createdDate,
            'state' => $enquiry['state'] ?? null,
            'gclid' => $enquiry['gclid'] ?? null,
            'utm_source' => $enquiry['utm_source'] ?? null,
            'utm_medium' => $enquiry['utm_medium'] ?? null,
            'utm_campaign' => $enquiry['utm_campaign'] ?? null,
            'utm_term' => $enquiry['utm_term'] ?? null,
            'utm_content' => $enquiry['utm_content'] ?? null,
            'ip_address' => $request->ip(),
            'user_agent' => (string) $request->userAgent(),
            'payload' => json_encode($payload),
        ]);

        // Auto-create newsletter preference for digest (if not exists)
        $email = $enquiry['email'] ?? null;
        if ($email && !NewsletterPreference::where('email', $email)->exists()) {
            NewsletterPreference::create([
                'email' => $email,
                'name' => $enquiry['name'] ?? null,
                'frequency' => NewsletterPreference::FREQUENCY_WEEKLY,
                'sectors' => $enquiry['interest'] ? [$enquiry['interest']] : config('newsletter.sectors'),
                'token' => NewsletterPreference::generateToken(),
                'subscriber_data_id' => (string) $row->id,
            ]);
        }

        // Sync to brsubscribers (primary) with duplicate check - use direct DB insert to avoid model side effects
        if ($email) {
            $digestMailListId = config('newsletter.digest.mail_list_id') ?: env('NEWSLETTER_DIGEST_MAIL_LIST_ID');
            $list = ($digestMailListId ? MailList::find($digestMailListId) : null) ?: MailList::first();
            if ($list) {
                // Use base table name 'subscribers' - Laravel adds DB_TABLES_PREFIX automatically
                $exists = DB::table('subscribers')
                    ->where('mail_list_id', $list->id)
                    ->where('email', $email)
                    ->exists();
                if (!$exists) {
                    $now = now();
                    DB::table('subscribers')->insert([
                        'uid' => uniqid(),
                        'mail_list_id' => $list->id,
                        'email' => $email,
                        'status' => Subscriber::STATUS_SUBSCRIBED,
                        'from' => $payload['source'] ?? 'website-server-apis',
                        'ip' => $request->ip() ?? '',
                        'subscription_type' => Subscriber::SUBSCRIPTION_TYPE_SINGLE_OPTIN,
                        'verification_status' => Subscriber::VERIFICATION_STATUS_DELIVERABLE,
                        'last_verification_at' => $verifiedAt,
                        'last_verification_by' => 'webhook',
                        'last_verification_result' => 'email_verified',
                        'created_at' => $now,
                        'updated_at' => $now,
                    ]);
                }
            }
        }

        // Sync to digest_subscribers with duplicate check (optional, non-blocking)
        if ($email) {
            try {
                if (!DigestSubscriber::existsByEmail($email)) {
                    DigestSubscriber::create([
                        'email' => $email,
                        'name' => $enquiry['name'] ?? null,
                        'ip' => $request->ip(),
                        'subscription_type' => 'webhook',
                        'verification_status' => 'deliverable',
                        'verified_at' => $verifiedAt,
                    ]);
                }
            } catch (\Throwable $e) {
                // digest_subscribers table may not exist; don't block brsubscribers sync
            }
        }

        return response()->json([
            'received' => true,
            'id' => $row->id,
        ]);
    }
}

