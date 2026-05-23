@extends('layouts.core.backend', [
    'menu' => 'marketing_subscribers',
])

@section('title', trans('messages.marketing_digest.page_title'))

@section('page_header')
    <div class="page-title">
        <ul class="breadcrumb breadcrumb-caret position-right">
            <li class="breadcrumb-item"><a href="{{ action("Admin\HomeController@index") }}">{{ trans('messages.home') }}</a></li>
            <li class="breadcrumb-item"><a href="{{ route('admin.live_subscribers.dashboard') }}">{{ trans('messages.live_subscribers.dashboard_title') }}</a></li>
            <li class="breadcrumb-item active">{{ trans('messages.live_subscribers.all_subscribers_breadcrumb') }}</li>
        </ul>
        <h1>
            <span class="text-semibold"><span class="material-symbols-rounded">mail</span> {{ trans('messages.marketing_digest.page_title') }}</span>
        </h1>
    </div>
@endsection

@section('content')
    @php
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
    <form method="get" action="{{ route('admin.live_subscribers.list') }}" class="mb-3">
        <input type="hidden" name="sort" value="{{ $sort }}" />
        <input type="hidden" name="direction" value="{{ $sort_direction }}" />
        <div class="filter-box d-inline-flex align-items-center">
            <span class="text-nowrap">
                <input type="text" name="keyword" class="form-control search" value="{{ request('keyword') }}" placeholder="{{ trans('messages.type_to_search') }}" />
                <span class="material-symbols-rounded">search</span>
            </span>
            <button type="submit" class="btn btn-secondary ms-2">{{ trans('messages.submit') }}</button>
            <span class="ms-3 d-inline-flex align-items-center">
                <label class="me-2 mb-0 small text-muted">{{ trans('messages.num_per_page') }}</label>
                <select class="form-select form-select-sm" name="per_page" style="width: auto;" onchange="this.form.submit()">
                    @foreach ([25, 50, 100] as $n)
                        <option value="{{ $n }}"{{ (int) request('per_page', 50) === $n ? ' selected' : '' }}>{{ $n }}</option>
                    @endforeach
                </select>
            </span>
        </div>
    </form>

    <div class="pml-table-container">
        @if ($preferences->count() > 0)
            <table class="table table-box pml-table mt-2">
                <thead>
                    <tr>
                        <th class="text-nowrap">
                            <a href="{{ $marketingDigestSortHref('id') }}" class="text-reset text-semibold">{{ trans('messages.marketing_digest.col_row_no') }}@if ($sort === 'id') <span class="material-symbols-rounded" style="font-size:18px;line-height:0;vertical-align:middle;">{{ $sort_direction === 'asc' ? 'arrow_upward' : 'arrow_downward' }}</span>@endif</a>
                        </th>
                        <th class="text-nowrap">
                            <a href="{{ $marketingDigestSortHref('name') }}" class="text-reset text-semibold">{{ trans('messages.name') }}@if ($sort === 'name') <span class="material-symbols-rounded" style="font-size:18px;line-height:0;vertical-align:middle;">{{ $sort_direction === 'asc' ? 'arrow_upward' : 'arrow_downward' }}</span>@endif</a>
                        </th>
                        <th class="text-nowrap">
                            <a href="{{ $marketingDigestSortHref('email') }}" class="text-reset text-semibold">{{ trans('messages.email') }}@if ($sort === 'email') <span class="material-symbols-rounded" style="font-size:18px;line-height:0;vertical-align:middle;">{{ $sort_direction === 'asc' ? 'arrow_upward' : 'arrow_downward' }}</span>@endif</a>
                        </th>
                        <th class="text-nowrap">
                            <a href="{{ $marketingDigestSortHref('frequency') }}" class="text-reset text-semibold">{{ trans('messages.marketing_digest.frequency') }}@if ($sort === 'frequency') <span class="material-symbols-rounded" style="font-size:18px;line-height:0;vertical-align:middle;">{{ $sort_direction === 'asc' ? 'arrow_upward' : 'arrow_downward' }}</span>@endif</a>
                        </th>
                        <th class="text-nowrap">
                            <a href="{{ $marketingDigestSortHref('sectors') }}" class="text-reset text-semibold">{{ trans('messages.marketing_digest.sectors') }}@if ($sort === 'sectors') <span class="material-symbols-rounded" style="font-size:18px;line-height:0;vertical-align:middle;">{{ $sort_direction === 'asc' ? 'arrow_upward' : 'arrow_downward' }}</span>@endif</a>
                        </th>
                        <th class="text-nowrap">
                            <a href="{{ $marketingDigestSortHref('unsubscribed_at') }}" class="text-reset text-semibold">{{ trans('messages.marketing_digest.subscription_status') }}@if ($sort === 'unsubscribed_at') <span class="material-symbols-rounded" style="font-size:18px;line-height:0;vertical-align:middle;">{{ $sort_direction === 'asc' ? 'arrow_upward' : 'arrow_downward' }}</span>@endif</a>
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
    </div>

    <div class="modal fade" id="marketingSendLogsModal" tabindex="-1" aria-labelledby="marketingSendLogsModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="marketingSendLogsModalLabel">{{ trans('messages.marketing_digest.send_logs_title') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="{{ trans('messages.close') }}"></button>
                </div>
                <div class="modal-body">
                    <p class="text-muted2 mb-2" id="marketingSendLogsEmail"></p>
                    <div id="marketingSendLogsSpinner" class="text-center py-4 d-none">
                        <span class="material-symbols-rounded">progress_activity</span>
                    </div>
                    <div id="marketingSendLogsError" class="alert alert-danger" style="display: none;"></div>
                    <div class="table-responsive">
                        <table class="table table-box mb-0" id="marketingSendLogsTable">
                            <thead>
                                <tr>
                                    <th>{{ trans('messages.marketing_digest.col_date') }}</th>
                                    <th>{{ trans('messages.marketing_digest.col_time') }}</th>
                                    <th>{{ trans('messages.marketing_digest.col_content_type') }}</th>
                                    <th>{{ trans('messages.marketing_digest.col_name') }}</th>
                                    <th>{{ trans('messages.marketing_digest.col_status') }}</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ trans('messages.close') }}</button>
                </div>
            </div>
        </div>
    </div>

    <script>
        (function () {
            var modal = document.getElementById('marketingSendLogsModal');
            if (!modal) {
                return;
            }
            var noLogsText = @json(trans('messages.marketing_digest.no_logs'));
            var loadLogsErrorText = @json(trans('messages.marketing_digest.load_logs_error'));
            modal.addEventListener('show.bs.modal', function (event) {
                var btn = event.relatedTarget;
                if (!btn || !btn.getAttribute('data-fetch-url')) {
                    return;
                }
                var url = btn.getAttribute('data-fetch-url');
                var emailEl = document.getElementById('marketingSendLogsEmail');
                var tbody = modal.querySelector('#marketingSendLogsTable tbody');
                var err = document.getElementById('marketingSendLogsError');
                var spin = document.getElementById('marketingSendLogsSpinner');

                tbody.innerHTML = '';
                err.style.display = 'none';
                err.textContent = '';
                spin.classList.remove('d-none');
                emailEl.textContent = '';

                fetch(url, { headers: { Accept: 'application/json' }, credentials: 'same-origin' })
                    .then(function (r) {
                        if (!r.ok) {
                            throw new Error('HTTP ' + r.status);
                        }
                        return r.json();
                    })
                    .then(function (data) {
                        spin.classList.add('d-none');
                        emailEl.textContent = data.email || '';
                        var rows = data.logs || [];
                        if (!rows.length) {
                            tbody.innerHTML = '<tr><td colspan="5" class="text-muted">' + escapeHtml(noLogsText) + '</td></tr>';
                            return;
                        }
                        rows.forEach(function (row) {
                            var tr = document.createElement('tr');
                            var statusCell = escapeHtml(row.status || '');
                            if (row.error_message) {
                                statusCell += ' <span class="material-symbols-rounded text-danger" title="' + escapeAttr(row.error_message) + '" style="font-size:18px;vertical-align:middle;">error</span>';
                            }
                            tr.innerHTML =
                                '<td class="text-nowrap">' + escapeHtml(row.date || '') + '</td>' +
                                '<td class="text-nowrap">' + escapeHtml(row.time || '') + '</td>' +
                                '<td>' + escapeHtml(row.content_type || '') + '</td>' +
                                '<td><span class="small text-muted2">' + escapeHtml(row.name || '') + '</span></td>' +
                                '<td>' + statusCell + '</td>';
                            tbody.appendChild(tr);
                        });
                    })
                    .catch(function () {
                        spin.classList.add('d-none');
                        err.style.display = '';
                        err.textContent = loadLogsErrorText;
                    });
            });

            function escapeHtml(s) {
                if (!s) {
                    return '';
                }
                return String(s)
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#039;');
            }

            function escapeAttr(s) {
                return escapeHtml(s).replace(/"/g, '&quot;');
            }
        })();
    </script>
@endsection
