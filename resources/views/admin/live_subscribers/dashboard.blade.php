@extends('layouts.core.backend', [
    'menu' => $dashboard_menu_active ?? 'marketing_subscribers',
])

@section('title', trans('messages.marketing_digest.page_title'))

@section('head')
    <script type="text/javascript" src="{{ AppUrl::asset('core/echarts/echarts.min.js') }}"></script>
    <script type="text/javascript" src="{{ AppUrl::asset('core/echarts/dark.js') }}"></script>
    <style>
        .live-subs-dash .dash-kpi-card { border-radius: 12px; border: none; box-shadow: 0 1px 3px rgba(0,0,0,.06); min-height: 108px; }
        .live-subs-dash .dash-kpi-card .dash-kpi-icon { width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:24px;line-height:1; }
        .live-subs-dash .dash-chart-card { border-radius: 12px; border: none; box-shadow: 0 1px 3px rgba(0,0,0,.06); }
        .live-subs-dash .dash-muted { font-size: 13px; color: rgba(85,94,121,.82); }
        .live-subs-dash .timeline-dot { width: 10px; height: 10px; border-radius: 999px; background: currentColor; margin-top: 5px; }
        .live-subs-dash #chartFreqPie, #chartSectorPie, #chartEmailsBar { min-height: 280px; }
    </style>
@endsection



@php
    $admin = Auth::user()->admin;
@endphp

@section('page_header')
    <div class="page-title">
        <div class="d-flex flex-wrap align-items-start justify-content-between gap-3">
            <div>
                <ul class="breadcrumb breadcrumb-caret position-right mb-1">
                    <li class="breadcrumb-item"><a href="{{ action('Admin\HomeController@index') }}">{{ trans('messages.home') }}</a></li>
                    <li class="breadcrumb-item active">{{ trans('messages.marketing_digest.page_title') }}</li>
                </ul>
                <h1 class="mb-2">
                    <span class="text-semibold"><span class="material-symbols-rounded">mail</span> {{ trans('messages.marketing_digest.page_title') }}</span>
                </h1>
                <p class="text-muted mb-0">{{ trans('messages.live_subscribers.dashboard_intro') }}</p>
            </div>
            <div class="text-end ms-auto">
                <a href="{{ route('admin.live_subscribers.list') }}" class="btn btn-primary">{{ trans('messages.live_subscribers.open_full_list') }}</a>
            </div>
        </div>

        <form method="get" action="{{ route('admin.home') }}" class="d-inline-flex align-items-center mt-4 gap-2">
            <label class="small text-muted mb-0">{{ trans('messages.live_subscribers.charts_scope') }}</label>
            <select name="charts_period" class="form-select form-select-sm" style="width:auto" onchange="this.form.submit()">
                <option value="week"{{ ($charts_period ?? 'week') === 'week' ? ' selected' : '' }}>{{ trans('messages.live_subscribers.this_week') }}</option>
                <option value="month"{{ ($charts_period ?? '') === 'month' ? ' selected' : '' }}>{{ trans('messages.live_subscribers.this_month') }}</option>
            </select>
        </form>
    </div>
@endsection

@section('content')
    <div class="live-subs-dash pb-5">
        <div class="row g-3 mb-3">
            <div class="col-sm-6 col-xl-3">
                <div class="card dash-kpi-card h-100 p-3">
                    <div class="d-flex align-items-start gap-3">
                        <div class="dash-kpi-icon bg-light text-primary pt-2 material-symbols-rounded">groups</div>
                        <div>
                            <div class="dash-muted">{{ trans('messages.live_subscribers.kpi_total_subscribers') }}</div>
                            <div class="h3 fw-semibold mb-0">{{ number_format($dash['kpi_total']) }}</div>
                            <div class="small text-muted">{{ trans('messages.live_subscribers.kpi_all_time') }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xl-3">
                <div class="card dash-kpi-card h-100 p-3">
                    <div class="d-flex align-items-start gap-3">
                        <div class="dash-kpi-icon bg-light text-success pt-2 material-symbols-rounded">person</div>
                        <div>
                            <div class="dash-muted">{{ trans('messages.live_subscribers.kpi_active') }}</div>
                            <div class="h3 fw-semibold mb-0">{{ number_format($dash['kpi_active']) }}</div>
                            @if (($dash['kpi_active_pct_total'] ?? null) !== null)
                                <div class="small text-muted">{{ trans('messages.live_subscribers.kpi_pct_of_total', ['pct' => $dash['kpi_active_pct_total']]) }}</div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xl-3">
                <div class="card dash-kpi-card h-100 p-3">
                    <div class="d-flex align-items-start gap-3">
                        <div class="dash-kpi-icon bg-light pt-2 material-symbols-rounded" style="color:#6f42c1;">today</div>
                        <div>
                            <div class="dash-muted">{{ trans('messages.live_subscribers.kpi_daily_freq') }}</div>
                            <div class="h3 fw-semibold mb-0">{{ number_format($dash['kpi_daily']) }}</div>
                            @if (($dash['kpi_daily_pct_total'] ?? null) !== null)
                                <div class="small text-muted">{{ trans('messages.live_subscribers.kpi_pct_of_total', ['pct' => $dash['kpi_daily_pct_total']]) }}</div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xl-3">
                <div class="card dash-kpi-card h-100 p-3">
                    <div class="d-flex align-items-start gap-3">
                        <div class="dash-kpi-icon bg-light text-warning pt-2 material-symbols-rounded">date_range</div>
                        <div>
                            <div class="dash-muted">{{ trans('messages.live_subscribers.kpi_weekly_freq') }}</div>
                            <div class="h3 fw-semibold mb-0">{{ number_format($dash['kpi_weekly']) }}</div>
                            @if (($dash['kpi_weekly_pct_total'] ?? null) !== null)
                                <div class="small text-muted">{{ trans('messages.live_subscribers.kpi_pct_of_total', ['pct' => $dash['kpi_weekly_pct_total']]) }}</div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row g-3 mb-3">
            <div class="col-lg-7">
                <div class="card dash-chart-card p-3">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <h5 class="text-semibold mb-0">{{ trans('messages.live_subscribers.freq_chart_title') }}</h5>
                    </div>
                    <div id="chartFreqPie" class="w-100"></div>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="card dash-chart-card p-3 h-100">
                    <h5 class="text-semibold mb-3">{{ trans('messages.live_subscribers.scheduled_jobs_title') }}</h5>
                    <div class="table-responsive">
                        <table class="table table-borderless mb-0 small">
                            <thead>
                                <tr class="dash-muted border-bottom">
                                    <th>{{ trans('messages.live_subscribers.schedule_col_frequency') }}</th>
                                    <th class="text-end">{{ trans('messages.live_subscribers.schedule_col_subscribers') }}</th>
                                    <th>{{ trans('messages.live_subscribers.schedule_col_next') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($dash['triggers'] as $t)
                                    <tr class="border-bottom">
                                        <td class="fw-semibold">{{ trans('messages.live_subscribers.trigger_' . ($t['key'] ?? '')) }}</td>
                                        <td class="text-end">{{ number_format((int) $t['subscribers']) }}</td>
                                        <td>
                                            @if (($t['next'] ?? null) instanceof \Carbon\Carbon)
                                                {{ $admin->formatDateTime($t['next'], 'datetime_full') }}
                                            @else
                                                —
                                            @endif
                                            <div class="text-muted">{{ $t['schedule'] ?? '' }}</div>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="row g-3 mb-3">
            <div class="col-lg-4">
                <div class="card dash-chart-card p-3">
                    <div class="d-flex justify-content-between mb-2">
                        <h5 class="text-semibold mb-0">{{ trans('messages.live_subscribers.email_sent_chart_title') }}</h5>
                    </div>
                    <div id="chartEmailsBar" class="w-100"></div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card dash-chart-card p-3">
                    <h5 class="text-semibold mb-3">{{ trans('messages.live_subscribers.top_sectors_title') }}</h5>
                    @if (empty($dash['sector_pie']))
                        <div class="text-muted pt-5 pb-5 text-center">{{ trans('messages.live_subscribers.no_sector_data') }}</div>
                        <div id="chartSectorPie" style="display:none;"></div>
                    @else
                        <div id="chartSectorPie" class="w-100"></div>
                    @endif
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card dash-chart-card p-3 h-100">
                    <h5 class="text-semibold mb-3">{{ trans('messages.live_subscribers.activity_title') }}</h5>
                    <div class="d-flex flex-column gap-3" style="max-height:340px; overflow-y:auto;">
                        @forelse ($dash['activities'] as $a)
                            @php $at = $a['at'] ?? null; @endphp
                            <div class="d-flex gap-3">
                                <span class="timeline-dot {{ $a['class'] ?? 'text-muted' }}"></span>
                                <div>
                                    <div class="material-symbols-rounded align-middle {{ $a['class'] ?? '' }}" style="font-size:18px;line-height:0;vertical-align:middle;">{{ $a['icon'] ?? '' }}</div>
                                    <span class="ms-1">{{ $a['msg'] ?? '' }}</span>
                                    @if ($at instanceof \Carbon\Carbon)
                                        <div class="dash-muted">{{ $admin->formatDateTime($at, 'datetime_full') }}</div>
                                    @endif
                                </div>
                            </div>
                        @empty
                            <p class="text-muted mb-0">{{ trans('messages.live_subscribers.activity_empty') }}</p>
                        @endforelse
                    </div>
                </div>
            </div>
        </div>

        @php
            $m = $dash['metrics'] ?? [];
            $delPct = data_get($m, 'delivery.pct');
            $delTrend = data_get($m, 'delivery.delta_vs_prior');
            $attempts = (int) data_get($m, 'delivery.attempts', 0);
            $sentOk = (int) data_get($m, 'delivery.sent', 0);
            $failPct = data_get($m, 'fail.pct');
            $unPct = data_get($m, 'unsubscribe.pct');
            $unInactive = (int) data_get($m, 'unsubscribe.inactive', 0);
        @endphp

        <div class="row g-3 mb-5">
            <div class="col-md-6 col-lg-4">
                <div class="card dash-kpi-card p-3">
                    <div class="dash-muted mb-2">{{ trans('messages.live_subscribers.metric_open_rate') }}</div>
                    <div class="h3 fw-semibold mb-1">—</div>
                    <div class="small text-muted">{{ trans('messages.live_subscribers.metric_not_tracked_open') }}</div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card dash-kpi-card p-3">
                    <div class="dash-muted mb-2">{{ trans('messages.live_subscribers.metric_click_rate') }}</div>
                    <div class="h3 fw-semibold mb-1">—</div>
                    <div class="small text-muted">{{ trans('messages.live_subscribers.metric_not_tracked_click') }}</div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card dash-kpi-card p-3">
                    <div class="dash-muted mb-2">{{ trans('messages.live_subscribers.metric_delivery_rate') }}</div>
                    <div class="h3 fw-semibold mb-1">{{ $delPct !== null ? $delPct.'%' : '—' }}</div>
                    @if ($attempts > 0)
                        <div class="small">{{ trans('messages.live_subscribers.metric_ratio', ['n' => $sentOk, 'd' => $attempts]) }}</div>
                        @if ($delTrend !== null)
                            @php $up = $delTrend >= 0; @endphp
                            <span class="small fw-semibold {{ $up ? 'text-success' : 'text-danger' }}">{{ $up ? '▲ ' : '▼ ' }} {{ $delTrend }}%</span>
                            <span class="small text-muted ms-1">{{ trans('messages.live_subscribers.vs_prior_window') }}</span>
                        @endif
                    @endif
                    <div class="small text-muted mt-2">{{ trans('messages.live_subscribers.metric_delivery_note') }}</div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card dash-kpi-card p-3">
                    <div class="dash-muted mb-2">{{ trans('messages.live_subscribers.metric_fail_rate') }}</div>
                    <div class="h3 fw-semibold mb-1">{{ $failPct !== null ? $failPct.'%' : '—' }}</div>
                    <div class="small text-muted">{{ trans('messages.live_subscribers.metric_fail_note') }}</div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card dash-kpi-card p-3">
                    <div class="dash-muted mb-2">{{ trans('messages.live_subscribers.metric_unsubscribe_rate') }}</div>
                    <div class="h3 fw-semibold mb-1">{{ $unPct !== null ? $unPct.'%' : '—' }}</div>
                    @if ($dash['kpi_total'] > 0)
                        <div class="small">{{ trans('messages.live_subscribers.metric_ratio', ['n' => $unInactive, 'd' => $dash['kpi_total']]) }}</div>
                    @endif
                </div>
            </div>
        </div>
    </div>

    <script>
        $(function() {
            var donutColors = ['#3b82f6', '#10b981', '#f59e0b', '#64748b', '#6366f1', '#dc2626', '#0891b2', '#a855f7'];
            function initFreqPie() {
                var el = document.getElementById('chartFreqPie');
                if (!el) return;
                var freqData = @json($freqDonutPayload ?? []);
                var chart = echarts.init(el, ECHARTS_THEME);
                var total = freqData.reduce(function(s, row) { return s + Number(row.value || 0); }, 0);
                var styled = freqData.map(function(row, ix) {
                    return {
                        name: row.name,
                        value: row.value,
                        itemStyle: {
                            color: donutColors[ix % donutColors.length],
                            borderWidth: 2,
                            borderColor: '#fff'
                        }
                    };
                });
                chart.setOption({
                    tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
                    legend: { orient: 'vertical', right: 8, top: 'middle', textStyle: { fontSize: 11 } },
                    graphic: [{
                        type: 'text',
                        left: '40%',
                        top: '48%',
                        style: {
                            text: total + '\n' + @json(__('messages.live_subscribers.total_centre')),
                            textAlign: 'center',
                            textVerticalAlign: 'middle',
                            fill: ECHARTS_THEME === 'dark' ? '#e2e8f0' : '#334155',
                            fontSize: 13,
                            fontWeight: 600
                        }
                    }],
                    series: [{
                        type: 'pie',
                        radius: ['45%', '70%'],
                        center: ['40%', '50%'],
                        data: styled,
                        label: { formatter: '{b}\n{d}%' },
                        emphasis: {
                            scale: false,
                            itemStyle: {
                                shadowBlur: 15,
                                shadowColor: 'rgba(0,0,0,.2)'
                            }
                        }
                    }]
                });
                $(window).on('resize', function () { chart.resize(); });
            }

            function initSectorPie() {
                var el = document.getElementById('chartSectorPie');
                if (!el || el.style.display === 'none') return;
                var data = @json($dash['sector_pie']);
                var chart = echarts.init(el, ECHARTS_THEME);
                var styled = data.map(function(row, ix) {
                    return {
                        name: row.name,
                        value: row.value,
                        itemStyle: {
                            color: donutColors[ix % donutColors.length],
                            borderWidth: 2,
                            borderColor: '#fff'
                        }
                    };
                });
                chart.setOption({
                    tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
                    legend: { type: 'scroll', orient: 'vertical', right: 0, top: 60, bottom: 20, width: '36%', textStyle: { fontSize: 11 } },
                    series: [{
                        type: 'pie',
                        radius: ['40%', '65%'],
                        center: ['32%', '50%'],
                        data: styled,
                        label: { fontSize: 11, formatter: '{b}\n{d}%' },
                    }]
                });
                $(window).on('resize', function () { chart.resize(); });
            }

            function initBarEmails() {
                var el = document.getElementById('chartEmailsBar');
                if (!el) return;
                var chart = echarts.init(el, ECHARTS_THEME);
                chart.setOption({
                    tooltip: { trigger: 'axis' },
                    xAxis: { type: 'category', data: @json($dash['emails_sent_bar']['labels']), axisLabel: { rotate: 28, fontSize: 10 } },
                    yAxis: { type: 'value', minInterval: 1 },
                    grid: { left: 36, right: 12, top: 32, bottom: 48 },
                    series: [{
                        type: 'bar',
                        data: @json($dash['emails_sent_bar']['values']),
                        itemStyle: { color: '#3b82f6', borderRadius: [6, 6, 0, 0] }
                    }]
                });
                $(window).on('resize', function () { chart.resize(); });
            }

            initFreqPie();
            initSectorPie();
            initBarEmails();
        });
    </script>
@endsection
