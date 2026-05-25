<?php

namespace Acelle\Http\Controllers\Admin;

use Acelle\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Acelle\Services\NewsletterAdminDashboardService;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct()
    {
        parent::__construct();

        // Trigger admin monitoring events when admin is logged in
        event(new \Acelle\Events\AdminLoggedIn());
    }

    /**
     * Show the application admin dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (!config('app.saas')) {
            return redirect()->action('HomeController@index');
        }

        $payload = NewsletterAdminDashboardService::viewPayloadForDashboard(
            $request->user()->admin->getTimezone(),
            (string) $request->query('charts_period', 'week')
        );

        return view('admin.live_subscribers.dashboard', array_merge($payload, [
            'dashboard_menu_active' => 'dashboard',
        ]));
    }
}
