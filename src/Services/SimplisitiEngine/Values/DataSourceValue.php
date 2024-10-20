<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Values;

use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Alban\Simplisiti\Support\Plugin\Managers\DataSourceManager;
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

        $container = $app->onManager(DataSourceManager::class)->getDataContainer($this->default);

        $appliedSettings = $this->parseAppliedSettings();

        if ($withSettings) {
            $parsed['settings'] = $container->getSettingMenu($appliedSettings);
        }

        if ($withData) {
            $parsed['value'] = $container?->getData($appliedSettings->toArray());
        }

        return $parsed;
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
