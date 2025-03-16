<?php

namespace Alban\Simplisiti\Support\Plugin;

// require __DIR__.'/../../../../vendor/autoload.php';

use Alban\Simplisiti\Models\Setting;

abstract class Plugin {
    public function getSettingValue(string $name, ?string $class = null): array | string | null
    {
        return Setting::where('plugin', $class ?? $this::class)->where('name', $name)->first()->value['value'] ?? null;
    }

    public function setSettingValue(string $name, array $value): void
    {
        Setting::updateOrCreate(
            [
                'plugin' => $this::class,
                'name' => $name,
            ],
            [
                'value' => [
                    'value' => $value,
                ],
            ]
        );
    }
}
