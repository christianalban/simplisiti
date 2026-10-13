<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Settings;

class TextSettings extends Settings
{
    public function merge(array|string|int|float | null $merge) {
        return $merge ?? $this->default;
    }
}
