<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Settings;

class TextSettings extends Settings
{
    public function parse() {
        return $this->default;
    }

    public function merge(array|string|int | null $merge) {
        return $merge ?? $this->default;
    }
}
