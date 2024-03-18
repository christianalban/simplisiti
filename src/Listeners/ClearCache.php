<?php
 
namespace Alban\Simplisiti\Listeners;

use Alban\Simplisiti\Actions\Cache\ClearAllCacheAction;

class ClearCache
{
    /**
     * Handle the event.
     */
    public function handle(): void
    {
        (new ClearAllCacheAction())->execute();
    }
}
