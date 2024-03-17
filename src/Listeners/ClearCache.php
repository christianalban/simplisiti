<?php
 
namespace Alban\Simplisiti\Listeners;

use Illuminate\Support\Facades\Cache;

class ClearCache
{
    /**
     * Handle the event.
     */
    public function handle(): void
    {
        Cache::clear();
    }
}
