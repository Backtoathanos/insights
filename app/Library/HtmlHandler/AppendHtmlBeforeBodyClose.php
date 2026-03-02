<?php

namespace Acelle\Library\HtmlHandler;

use League\Pipeline\StageInterface;

/**
 * Append HTML before </body> - more reliable for email templates that may have complex structure.
 */
class AppendHtmlBeforeBodyClose implements StageInterface
{
    public $newHtml;

    public function __construct($newHtml)
    {
        $this->newHtml = trim($newHtml);
    }

    public function __invoke($html)
    {
        if (empty($this->newHtml)) {
            return $html;
        }
        // Insert before </body> if present, otherwise append at end
        if (stripos($html, '</body>') !== false) {
            return str_ireplace('</body>', $this->newHtml . '</body>', $html);
        }
        return $html . $this->newHtml;
    }
}
