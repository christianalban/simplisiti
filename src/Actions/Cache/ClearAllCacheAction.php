<?php

namespace Alban\Simplisiti\Actions\Cache;

use Illuminate\Support\Facades\Cache;

class ClearAllCacheAction
{
    public function execute(): void
    {
        Cache::clear();
    }
}
