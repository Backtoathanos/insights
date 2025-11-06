<?php
echo shell_exec('cat /proc/cpuinfo |grep "physical id" | sort | uniq | wc -l');

// Show all information, defaults to INFO_ALL
phpinfo();

// Show just the module information.
// phpinfo(8) yields identical results.
phpinfo(INFO_MODULES);

?>