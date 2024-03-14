<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Values;

use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;

class DataSourceValue extends Value
{
    public function parse() {
        $app = app(SimplisitiApp::class);

        $container = $app->getDataSourceManager()->getDataContainer($this->default);

        $appliedSettings = $this->parseAppliedSettings();

        $settings = $container->getSettingMenu($appliedSettings);

        return [
            'type' => $this->type,
            'name' => $this->name,
            'default' => $this->default,
            'value' => $container->getData($appliedSettings->toArray()),
            'settings' => $settings,
        ];
    }

    public function merge(array|string|int|null $merge) {
        $app = app(SimplisitiApp::class);

        $appliedSettings = $this->parseAppliedSettings()->toArray();

        $value = $app->getDataSourceManager()->getDataContainer($merge ?? $this->default)->getData($appliedSettings);

        return $value;
    }

    private function parseAppliedSettings(): mixed
    {
        return collect($this->applied_settings)->map(function ($setting) {
            return (object) $setting;
        });
    }
}
