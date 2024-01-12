<?php

namespace Alban\Simplisiti\Traits;

use Alban\Simplisiti\Models\Scopes\OrderListScope;

trait MustSort {

    public function setNextOrder(): self
    {
        $this->order = self::count() + 1;

        return $this;
    }

    protected static function booted(): void
    {
        static::addGlobalScope(new OrderListScope);
    }
}
