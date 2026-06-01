@php
    /** @var \Illuminate\Contracts\Pagination\LengthAwarePaginator $preferences */
    /** @var string $sort */
    /** @var string $sort_direction */
    $marketingDigestSortHref = function (string $column) use ($sort, $sort_direction): string {
        if ($sort === $column && $sort_direction === 'asc') {
            $nextDir = 'desc';
        } elseif ($sort === $column) {
            $nextDir = 'asc';
        } else {
            $nextDir = in_array($column, ['name', 'email', 'frequency', 'sectors'], true) ? 'asc' : 'desc';
        }

        return request()->fullUrlWithQuery([
            'sort' => $column,
            'direction' => $nextDir,
            'page' => 1,
        ]);
    };
@endphp

@if ($preferences->count() > 0)
    <table class="table table-box pml-table mt-2">
        <thead>
            <tr>
                <th class="text-nowrap">
                    <a href="{{ $marketingDigestSortHref('id') }}" class="text-reset text-semibold js-live-subscribers-nav">{{ trans('messages.marketing_digest.col_row_no') }}@if ($sort === 'id') <span class="material-symbols-rounded" style="font-size:18px;line-height:0;vertical-align:middle;">{{ $sort_direction === 'asc' ? 'arrow_upward' : 'arrow_downward' }}</span>@endif</a>
                </th>
                <th class="text-nowrap">
                    <a href="{{ $marketingDigestSortHref('name') }}" class="text-reset text-semibold js-live-subscribers-nav">{{ trans('messages.name') }}@if ($sort === 'name') <span class="material-symbols-rounded" style="font-size:18px;line-height:0;vertical-align:middle;">{{ $sort_direction === 'asc' ? 'arrow_upward' : 'arrow_downward' }}</span>@endif</a>
                </th>
                <th class="text-nowrap">
                    <a href="{{ $marketingDigestSortHref('email') }}" class="text-reset text-semibold js-live-subscribers-nav">{{ trans('messages.email') }}@if ($sort === 'email') <span class="material-symbols-rounded" style="font-size:18px;line-height:0;vertical-align:middle;">{{ $sort_direction === 'asc' ? 'arrow_upward' : 'arrow_downward' }}</span>@endif</a>
                </th>
                <th class="text-nowrap">
                    <a href="{{ $marketingDigestSortHref('frequency') }}" class="text-reset text-semibold js-live-subscribers-nav">{{ trans('messages.marketing_digest.frequency') }}@if ($sort === 'frequency') <span class="material-symbols-rounded" style="font-size:18px;line-height:0;vertical-align:middle;">{{ $sort_direction === 'asc' ? 'arrow_upward' : 'arrow_downward' }}</span>@endif</a>
                </th>
                <th class="text-nowrap">
                    <a href="{{ $marketingDigestSortHref('sectors') }}" class="text-reset text-semibold js-live-subscribers-nav">{{ trans('messages.marketing_digest.sectors') }}@if ($sort === 'sectors') <span class="material-symbols-rounded" style="font-size:18px;line-height:0;vertical-align:middle;">{{ $sort_direction === 'asc' ? 'arrow_upward' : 'arrow_downward' }}</span>@endif</a>
                </th>
                <th class="text-nowrap">
                    <a href="{{ $marketingDigestSortHref('unsubscribed_at') }}" class="text-reset text-semibold js-live-subscribers-nav">{{ trans('messages.marketing_digest.subscription_status') }}@if ($sort === 'unsubscribed_at') <span class="material-symbols-rounded" style="font-size:18px;line-height:0;vertical-align:middle;">{{ $sort_direction === 'asc' ? 'arrow_upward' : 'arrow_downward' }}</span>@endif</a>
                </th>
                <th width="120" class="text-end">{{ trans('messages.action') }}</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($preferences as $pref)
                @php
                    $sectors = is_array($pref->sectors) ? $pref->sectors : [];
                    $sectorText = $sectors === []
                        ? '—'
                        : implode(', ', $sectors);
                @endphp
                <tr>
                    <td class="text-nowrap">{{ $preferences->firstItem() + $loop->index }}</td>
                    <td>{{ $pref->name ?: '—' }}</td>
                    <td>{{ $pref->email }}</td>
                    <td class="text-nowrap">{{ $pref->frequency === \Acelle\Model\NewsletterPreference::FREQUENCY_WEEKLY ? trans('messages.marketing_digest.frequency_weekly') : trans('messages.marketing_digest.frequency_daily') }}</td>
                    <td><span title="{{ $sectorText }}">{{ \Illuminate\Support\Str::limit($sectorText, 80) }}</span></td>
                    <td class="text-nowrap">
                        @if ($pref->unsubscribed_at)
                            <span class="badge bg-secondary">{{ trans('messages.marketing_digest.status_unsubscribed') }}</span>
                        @else
                            <span class="badge bg-success">{{ trans('messages.marketing_digest.status_active') }}</span>
                        @endif
                    </td>
                    <td class="text-end">
                        <button type="button"
                            class="btn btn-sm btn-outline-primary btn-view-send-logs"
                            data-bs-toggle="modal"
                            data-bs-target="#marketingSendLogsModal"
                            data-fetch-url="{{ route('admin.live_subscribers.send_logs', $pref) }}"
                        >
                            {{ trans('messages.view') }}
                        </button>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>

    <div class="mt-3">
        @include('helpers._pagination', ['paginator' => $preferences])
    </div>
@else
    <div class="empty-list">
        <i class="material-symbols-rounded">mail</i>
        <span class="line-1">{{ trans('messages.marketing_digest.empty_list') }}</span>
    </div>
@endif
