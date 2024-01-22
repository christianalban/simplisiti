<?php

namespace Alban\Simplisiti\Support\Plugin;

use Alban\Simplisiti\Models\Setting;

abstract class Plugin {
    public function getSettingValue(string $name): array | null
    {
        return Setting::where('plugin', $this::class)->where('name', $name)->first()->value['value'] ?? null;
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
