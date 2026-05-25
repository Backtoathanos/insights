<?php

/*
|--------------------------------------------------------------------------
| Digest HTTP cron endpoints (minimal middleware — no session)
|--------------------------------------------------------------------------
| Use these URLs from hosting crons that cannot run `php artisan schedule:run`.
| Recommended: still prefer `* * * * * php artisan schedule:run` so marketing:send
| runs via the Laravel scheduler without web server timeouts.
|
| HTTP default frequency=both: daily batch + weekly; weekly skips if marketing_mail_send_logs already has a successful weekly send for the latest MARKETING_MAIL_WEEKLY_DAY cycle, otherwise catches up (content fetch + send).
| Use frequency=daily or frequency=weekly if you intentionally split cron URLs.
*/

Route::get('digest/marketingmail', 'DigestController@marketingMail')->name('digest.marketing_mail');
