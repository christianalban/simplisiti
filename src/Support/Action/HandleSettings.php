<?php

namespace Alban\Simplisiti\Support\Action;

use Alban\Simplisiti\Models\Component;

trait HandleSettings {
    
    public function setApplicationSettings(array $data, Component $component): array
    {
        $data['variables'] = collect($data['variables'])->map(function ($variable) use ($component) {
            $variables = collect(json_decode($component->getAttributes()['variables'], true));
            $variable['applied_settings'] = $variables->firstWhere('name', $variable['name'])['applied_settings'] ?? [];

            if (!isset($variable['settings'])) {
                return $variable;
            }

            foreach ($variable['settings'] as $setting) {
                $collectSetting = collect($setting['items']);
                if ($variable['type'] === 'datasource') {
                    $variable['applied_settings'] = $this->collectDatasourceSettings($variable, $collectSetting);
                } else if ($variable['type'] === 'resource') {
                    $variable['applied_settings'][] = $this->collectResourceSettings($collectSetting);
                }
            }
            unset($variable['settings']);
            return $variable;
        })->toArray();

        return $data;
    }

    private function collectDatasourceSettings($variable, $collectSetting): array
    {
        return $collectSetting->map(function ($settingItem) use ($variable) {
            return (object) [
                'plugin' => $settingItem['plugin'],
                'name' => $settingItem['name'],
                'value' => ['value' => $settingItem['value']],
            ];
        })->toArray();
    }

    private function collectResourceSettings($collectSetting): array
    {
        return $collectSetting->toArray();
    }
}
