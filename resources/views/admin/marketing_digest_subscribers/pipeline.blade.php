@extends('layouts.core.backend', [
    'menu' => 'marketing_subscribers',
])

@section('title', trans('messages.live_subscribers.pipeline_title'))

@section('page_header')
    <div class="page-title">
        <ul class="breadcrumb breadcrumb-caret position-right">
            <li class="breadcrumb-item"><a href="{{ action('Admin\HomeController@index') }}">{{ trans('messages.home') }}</a></li>
            <li class="breadcrumb-item"><a href="{{ route('admin.home') }}">{{ trans('messages.live_subscribers.dashboard_title') }}</a></li>
            <li class="breadcrumb-item"><a href="{{ route('admin.live_subscribers.list') }}">{{ trans('messages.live_subscribers.all_subscribers_breadcrumb') }}</a></li>
            <li class="breadcrumb-item active">{{ trans('messages.live_subscribers.pipeline_breadcrumb') }}</li>
        </ul>
        <h1>
            <span class="text-semibold"><span class="material-symbols-rounded">schedule_send</span> {{ trans('messages.live_subscribers.pipeline_title') }}</span>
        </h1>
    </div>
@endsection

@section('content')
    @if (session('success'))
        <div class="alert alert-success">{{ session('success') }}</div>
    @endif
    @if (session('error'))
        <div class="alert alert-danger">{{ session('error') }}</div>
    @endif

    <form method="get" action="{{ route('admin.live_subscribers.pipeline') }}" class="mb-4">
        <div class="row g-3 align-items-end">
            <div class="col-auto">
                <label for="pipeline-date" class="form-label mb-0">{{ trans('messages.live_subscribers.pipeline_filter_date') }}</label>
                <input type="date" id="pipeline-date" name="date" class="form-control" value="{{ $date_value }}" />
            </div>
            <div class="col-auto">
                <label for="pipeline-keyword" class="form-label mb-0">{{ trans('messages.type_to_search') }}</label>
                <input type="search" id="pipeline-keyword" name="keyword" class="form-control" value="{{ $keyword }}" placeholder="{{ trans('messages.type_to_search') }}" />
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-secondary">{{ trans('messages.submit') }}</button>
            </div>
        </div>
        <p class="text-muted2 small mt-2 mb-0">
            {{ trans('messages.live_subscribers.pipeline_send_at_hint', ['time' => $send_time_label]) }}
        </p>
    </form>

    <div class="pml-table-container">
        @if (count($rows) > 0)
            <table class="table table-box pml-table">
                <thead>
                    <tr>
                        <th>{{ trans('messages.name') }}</th>
                        <th>{{ trans('messages.live_subscribers.pipeline_col_interests') }}</th>
                        <th>{{ trans('messages.live_subscribers.pipeline_col_contents') }}</th>
                        <th>{{ trans('messages.marketing_digest.frequency') }}</th>
                        <th>{{ trans('messages.live_subscribers.pipeline_col_send_at') }}</th>
                        <th>{{ trans('messages.marketing_digest.col_status') }}</th>
                        <th class="text-end">{{ trans('messages.action') }}</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($rows as $row)
                        <tr>
                            <td>
                                <div class="fw-semibold">{{ $row['name'] }}</div>
                                <div class="small text-muted2">{{ $row['email'] }}</div>
                            </td>
                            <td><span title="{{ $row['interests'] }}">{{ \Illuminate\Support\Str::limit($row['interests'], 60) }}</span></td>
                            <td><span title="{{ $row['contents'] }}">{{ $row['contents'] }}</span></td>
                            <td class="text-nowrap">{{ $row['frequency_label'] }}</td>
                            <td class="text-nowrap">{{ $row['send_at_label'] }}</td>
                            <td class="text-nowrap">{{ $row['delivery_status'] }}</td>
                            <td class="text-end text-nowrap">
                                @if ($row['action']['type'] === 'cancel')
                                    <form method="post" action="{{ route('admin.live_subscribers.pipeline.cancel', $row['preference_id']) }}" class="d-inline" onsubmit="return confirm(@json(trans('messages.live_subscribers.pipeline_cancel_confirm')));">
                                        @csrf
                                        <input type="hidden" name="date" value="{{ $date_value }}" />
                                        <button type="submit" class="btn btn-sm btn-outline-danger">{{ trans('messages.live_subscribers.pipeline_cancel') }}</button>
                                    </form>
                                @elseif ($row['action']['type'] === 'cancelled')
                                    <span class="badge bg-secondary">{{ trans('messages.live_subscribers.pipeline_status_cancelled') }}</span>
                                @else
                                    <span class="text-muted2">—</span>
                                @endif
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        @else
            <div class="empty-list">
                <i class="material-symbols-rounded">schedule_send</i>
                <span class="line-1">{{ trans('messages.live_subscribers.pipeline_empty') }}</span>
            </div>
        @endif
    </div>
@endsection
