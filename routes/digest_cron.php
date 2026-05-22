<?php

/*
|--------------------------------------------------------------------------
| Digest HTTP cron endpoints (minimal middleware — no session)
|--------------------------------------------------------------------------
| Use these URLs from hosting crons that cannot run `php artisan schedule:run`.
| Recommended: still prefer `* * * * * php artisan schedule:run` so marketing:send
| runs via the Laravel scheduler without web server timeouts.
*/

Route::get('digest/marketingmail', 'DigestController@marketingMail')->name('digest.marketing_mail');
