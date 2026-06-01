<?php

/*
|--------------------------------------------------------------------------
| Digest HTTP cron endpoints (minimal middleware — no session)
|--------------------------------------------------------------------------
| Use these URLs from hosting crons that cannot run `php artisan schedule:run`.
| Recommended: still prefer `* * * * * php artisan schedule:run` so marketing:send
| runs via the Laravel scheduler without web server timeouts.
|
| HTTP default frequency=both: daily batch + weekly (weekly only on MARKETING_MAIL_WEEKLY_DAY). Skips recipients with any marketing_mail_send_logs row today (incl. admin cancel).
| Use frequency=daily or frequency=weekly if you intentionally split cron URLs.
*/

Route::get('digest/marketingmail', 'DigestController@marketingMail')->name('digest.marketing_mail');
