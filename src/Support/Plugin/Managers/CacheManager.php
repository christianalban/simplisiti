<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Illuminate\Support\Facades\Cache;

class CacheManager extends Manager {
    protected string $cacheKey = 'simplisiti_cache';

    protected function cacheKeyNamsepaced(string $key): string {
        return $this->cacheKey . '.' . $key;
    }

    public function addToCache(string $key, $value): void {
        Cache::put($this->cacheKeyNamsepaced($key), $value);
    }

    public function removeFromCache(string $key): void {
        Cache::forget($this->cacheKeyNamsepaced($key));
    }

    public function getFromCache(string $key): mixed {
        return Cache::get($this->cacheKeyNamsepaced($key));
    }

    public function hasOnCache(string $key): mixed {
        return Cache::has($this->cacheKeyNamsepaced($key));
    }
}
