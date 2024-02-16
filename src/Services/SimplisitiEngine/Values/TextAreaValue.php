<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Values;

class TextAreaValue extends Value
{
    public function parse() {
        return $this->default;
    }

    public function merge(array|string|int | null $merge) {
        return [
            'type' => $this->type,
            'name' => $this->name,
            'default' => $merge ?? $this->default,
        ];
    }
}
