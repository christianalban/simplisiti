<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Values;

use Illuminate\Support\Facades\Route;

class PageValue extends Value
{
    public function parse() {
        return $this->default;
    }

    public function merge(array|string|int|null $merge) {
        $route = $merge ?? $this->default;

        if (!Route::has($route)) {
            return '';
        }

        return route($route);
    }
}
