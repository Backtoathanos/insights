@extends('layouts.core.backend', [
    'menu' => 'marketing_subscribers',
])

@section('title', trans('messages.marketing_digest.page_title'))

@section('page_header')
    <div class="page-title">
        <ul class="breadcrumb breadcrumb-caret position-right">
            <li class="breadcrumb-item"><a href="{{ action("Admin\HomeController@index") }}">{{ trans('messages.home') }}</a></li>
            <li class="breadcrumb-item"><a href="{{ route('admin.home') }}">{{ trans('messages.live_subscribers.dashboard_title') }}</a></li>
            <li class="breadcrumb-item active">{{ trans('messages.live_subscribers.all_subscribers_breadcrumb') }}</li>
        </ul>
        <h1>
            <span class="text-semibold"><span class="material-symbols-rounded">mail</span> {{ trans('messages.marketing_digest.page_title') }}</span>
        </h1>
    </div>
@endsection

@section('content')
    <form id="live-subscribers-filter-form" class="mb-3" role="search" autocomplete="off">
        <input type="hidden" name="sort" value="{{ $sort }}" />
        <input type="hidden" name="direction" value="{{ $sort_direction }}" />
        <div class="filter-box d-inline-flex align-items-center">
            <span class="text-nowrap">
                <input type="search" name="keyword" id="live-subscribers-keyword" class="form-control search" value="{{ request('keyword') }}" placeholder="{{ trans('messages.type_to_search') }}" />
                <span class="material-symbols-rounded">search</span>
            </span>
            <span class="ms-3 d-inline-flex align-items-center">
                <label class="me-2 mb-0 small text-muted" for="live-subscribers-per-page">{{ trans('messages.num_per_page') }}</label>
                <select class="form-select form-select-sm" id="live-subscribers-per-page" name="per_page" style="width: auto;">
                    @foreach ([25, 50, 100] as $n)
                        <option value="{{ $n }}"{{ (int) request('per_page', 50) === $n ? ' selected' : '' }}>{{ $n }}</option>
                    @endforeach
                </select>
            </span>
            <span id="live-subscribers-loading" class="ms-3 small text-muted d-none" aria-live="polite">
                <span class="material-symbols-rounded" style="font-size:18px;vertical-align:middle;">progress_activity</span>
            </span>
        </div>
    </form>

    <div class="mb-3">
        <a href="{{ route('admin.live_subscribers.pipeline') }}" class="btn btn-primary">
            <span class="material-symbols-rounded align-middle" style="font-size:20px;">schedule_send</span>
            {{ trans('messages.live_subscribers.pipeline_open') }}
        </a>
    </div>

    <div class="pml-table-container" id="live-subscribers-list" data-list-url="{{ route('admin.live_subscribers.list') }}">
        @include('admin.marketing_digest_subscribers._list')
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
            var listRoot = document.getElementById('live-subscribers-list');
            var filterForm = document.getElementById('live-subscribers-filter-form');
            var loadingEl = document.getElementById('live-subscribers-loading');
            var keywordInput = document.getElementById('live-subscribers-keyword');
            var perPageSelect = document.getElementById('live-subscribers-per-page');
            var debounceTimer = null;
            var activeController = null;

            function syncFormFromUrl(url) {
                var params = new URL(url, window.location.origin).searchParams;
                var sortInput = filterForm.querySelector('input[name="sort"]');
                var dirInput = filterForm.querySelector('input[name="direction"]');
                if (sortInput && params.has('sort')) {
                    sortInput.value = params.get('sort');
                }
                if (dirInput && params.has('direction')) {
                    dirInput.value = params.get('direction');
                }
                if (params.has('keyword')) {
                    keywordInput.value = params.get('keyword');
                }
                if (params.has('per_page') && perPageSelect) {
                    perPageSelect.value = params.get('per_page');
                }
            }

            function buildListUrl(overrides) {
                var base = listRoot.getAttribute('data-list-url') || window.location.pathname;
                var params = new URLSearchParams(new FormData(filterForm));
                if (overrides) {
                    Object.keys(overrides).forEach(function (key) {
                        if (overrides[key] === null || overrides[key] === '') {
                            params.delete(key);
                        } else {
                            params.set(key, overrides[key]);
                        }
                    });
                }
                params.delete('page');
                if (overrides && overrides.page) {
                    params.set('page', overrides.page);
                }
                var qs = params.toString();

                return qs ? base + '?' + qs : base;
            }

            function setLoading(on) {
                if (!loadingEl) {
                    return;
                }
                loadingEl.classList.toggle('d-none', !on);
            }

            function loadList(url, pushState) {
                if (activeController) {
                    activeController.abort();
                }
                activeController = new AbortController();
                setLoading(true);
                listRoot.classList.add('opacity-50');

                fetch(url, {
                    signal: activeController.signal,
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                        Accept: 'text/html',
                    },
                    credentials: 'same-origin',
                })
                    .then(function (r) {
                        if (!r.ok) {
                            throw new Error('HTTP ' + r.status);
                        }
                        return r.text();
                    })
                    .then(function (html) {
                        listRoot.innerHTML = html;
                        if (pushState !== false) {
                            window.history.replaceState({}, '', url);
                        }
                        syncFormFromUrl(url);
                    })
                    .catch(function (err) {
                        if (err.name !== 'AbortError') {
                            window.location.href = url;
                        }
                    })
                    .finally(function () {
                        setLoading(false);
                        listRoot.classList.remove('opacity-50');
                        activeController = null;
                    });
            }

            if (filterForm && listRoot) {
                filterForm.addEventListener('submit', function (e) {
                    e.preventDefault();
                    loadList(buildListUrl({ page: 1 }));
                });

                keywordInput.addEventListener('input', function () {
                    clearTimeout(debounceTimer);
                    debounceTimer = setTimeout(function () {
                        loadList(buildListUrl({ page: 1 }));
                    }, 400);
                });

                keywordInput.addEventListener('keydown', function (e) {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        clearTimeout(debounceTimer);
                        loadList(buildListUrl({ page: 1 }));
                    }
                });

                if (perPageSelect) {
                    perPageSelect.addEventListener('change', function () {
                        loadList(buildListUrl({ page: 1 }));
                    });
                }

                listRoot.addEventListener('click', function (e) {
                    var link = e.target.closest('a.js-live-subscribers-nav, .pagination a.page-link');
                    if (!link || !link.href) {
                        return;
                    }
                    e.preventDefault();
                    loadList(link.href);
                });
            }

            window.addEventListener('popstate', function () {
                loadList(window.location.href, false);
            });
        })();

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
