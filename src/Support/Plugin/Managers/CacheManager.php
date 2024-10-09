<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Illuminate\Support\Facades\Cache;

class CacheManager extends Manager {
    public function addToCache(string $key, $value): void {
        Cache::put($key, $value);
    }

    public function removeFromCache(string $key): void {
        Cache::forget($key);
    }

    public function getFromCache(string $key): mixed {
        return Cache::get($key);
    }
}
