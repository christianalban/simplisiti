<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Values;

use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Illuminate\Support\Facades\Request;

class DataSourceValue extends Value
{
    public function parse() {
        $withSettings = $this->options['withSettings'] ?? Request::input('withSettings') === 'true';
        $withData = $this->options['withData'] ?? Request::input('withData') === 'true';

        $parsed = [
            'type' => $this->type,
            'name' => $this->name,
            'default' => $this->default,
            'value' => null,
        ];

        $app = app(SimplisitiApp::class);

        $container = $app->getDataSourceManager()->getDataContainer($this->default);

        $appliedSettings = $this->parseAppliedSettings();

        $container->setSettings($appliedSettings);

        if ($withData) {
            $parsed['value'] = $container?->getData($appliedSettings->toArray());
        }

        if ($withSettings) {
            $parsed['settings'] = $container->getSettingMenu();
        }

        return $parsed;
    }

    public function merge(array|string|int|null $merge) {
        $app = app(SimplisitiApp::class);

        $appliedSettings = $this->parseAppliedSettings();

        $container = $app->getDataSourceManager()->getDataContainer($merge ?? $this->default);
        $container->setSettings($appliedSettings);
        $value = $container->getData();

        return $value;
    }

    private function parseAppliedSettings(): mixed
    {
        return collect($this->applied_settings)->map(function ($setting) {
            return (object) $setting;
        });
    }
}
