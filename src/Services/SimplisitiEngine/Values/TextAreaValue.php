<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Values;

class TextAreaValue extends Value
{
    public function parse() {
        return $this->replaceCarriageReturn($this->default);
    }

    public function merge(array|string|int | null $merge) {
        return $this->replaceCarriageReturn($merge ?? $this->default);
    }

    private function replaceCarriageReturn(?string $value): string {
        if (is_null($value)) {
            return '';
        }

        return str_replace("\n", '<br>', $value);
    }
}
