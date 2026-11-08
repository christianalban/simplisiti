<?php

namespace Alban\Simplisiti\Support\Content;

final class ComponentClassName
{
    public static function forName(string $name): string
    {
        $normalized = preg_replace('/[^A-Za-z0-9_-]+/', '-', $name) ?? '';
        $normalized = trim($normalized, '-_');

        return 'component-' . ($normalized !== '' ? $normalized : 'unnamed');
    }
}
