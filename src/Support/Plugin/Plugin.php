<?php

namespace Alban\Simplisiti\Support\Plugin;

// require __DIR__.'/../../../../vendor/autoload.php';

use Alban\Simplisiti\Models\Setting;
use Alban\Simplisiti\Support\Plugin\Containers\SettingContainer;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;

abstract class Plugin {
    public function getSettingValue(string $name, ?string $class = null): array | string | SettingContainer | null
    {
        $class = $class ?? $this::class;

        $settings = Setting::where('plugin', $class)->where('name', $name)->first();

        $settingManager = app(SimplisitiApp::class)->getSettingManager();

        if ($settingManager->shouldUseSettingContainer($class)) {
            return new SettingContainer($settings, $settingManager);
        }

        return $settings->value['value'] ?? null;
    }

    /**
     * Set the value of a setting for a specific plugin.
     *
     * @param string $name The name of the setting.
     * @param array|string $value The value to set for the setting.
     */
    public function setSettingValue(string $name, array|string $value): void
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
