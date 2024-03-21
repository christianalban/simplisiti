<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Values;

class TextValue extends Value
{
    public function parse() {
        return $this->default;
    }

    public function merge(array|string|int | null $merge) {
        return $merge ?? $this->default;
    }
}
