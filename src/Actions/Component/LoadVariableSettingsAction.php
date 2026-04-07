<?php

namespace Alban\Simplisiti\Actions\Component;

use Alban\Simplisiti\Models\Component;
use Alban\Simplisiti\Services\SimplisitiEngine\Values\Value;

class LoadVariableSettingsAction
{
    public function execute(Component $component, string $name, string $type, string $default, ?string $section = null): array
    {
        $variables = json_decode($component->getAttributes()['variables'], true);

        $variable = collect($variables)->firstWhere('name', $name);

        $appliedSettings = $variable['applied_settings'] ?? [];
        if (isset($section)) {
            $section = $component->sections()->firstWhere('sections.id', $section);
            $appliedSettings = $section->pivot->applied_settings[$name] ?? $appliedSettings;
        }

        $data = Value::parseValue([
            'type' => $type,
            'name' => $name,
            'default' => $default,
            'applied_settings' => $appliedSettings,
        ]);

        return $data['settings'];
    }
}
