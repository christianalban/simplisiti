<?php

namespace Alban\Simplisiti\Traits;

trait MustActive {

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
