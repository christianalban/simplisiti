<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Settings;

class CheckboxSettings extends Settings
{
    public function merge(array|string|int|float | null $merge) {
        $value = $merge ?? $this->default;
        return $value && $value !== 'false' && $value !== '0' && $value !== 0 && $value !== false;
    }
}
