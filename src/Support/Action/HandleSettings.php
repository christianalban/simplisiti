<?php

namespace Alban\Simplisiti\Support\Action;

trait HandleSettings {
    
    public function setApplicationSettings(array $data): array
    {
        $data['variables'] = collect($data['variables'])->map(function ($variable) {
            $variable['applied_settings'] = [];
            if (!isset($variable['settings'])) {
                return $variable;
            }
            foreach ($variable['settings'] as $setting) {
                $collectSetting = collect($setting);
                $variable['applied_settings'] = $collectSetting->flatMap(function ($setting) {
                    return collect($setting)->map(function ($value) {
                        $objectValue = (object) $value;
                        $objectValue->value = ['value' => $objectValue->value];
                        return $objectValue;
                    })->toArray();
                })->toArray();
            }
            unset($variable['settings']);
            return $variable;
        })->toArray();

        return $data;
    }
}
