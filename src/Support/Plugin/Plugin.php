<?php

namespace Alban\Simplisiti\Support\Plugin;

// require __DIR__.'/../../../../vendor/autoload.php';

use Alban\Simplisiti\Models\Setting;
use Alban\Simplisiti\Support\Plugin\Containers\SettingContainer;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;

abstract class Plugin {
    public function getSettingValue(string $name, ?string $class = null): array | string | SettingContainer | null
    {
        $settings = Setting::where('plugin', $class ?? $this::class)->where('name', $name)->first();

        $settingManager = app(SimplisitiApp::class)->getSettingManager();

        if ($settingManager->shouldUseSettingContainer()) {
            return new SettingContainer($settings, $settingManager);
        }

        return $settings->value['value'] ?? null;
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
