<?php

namespace Alban\Simplisiti\Actions\Component;

use Alban\Simplisiti\Models\Component;
use Alban\Simplisiti\Services\SimplisitiEngine\Values\Value;

class LoadVariableSettingsAction
{
    public function execute(Component $component, string $name, string $type, string $default): array
    {
        $variables = json_decode($component->getAttributes()['variables'], true);

        $variable = collect($variables)->firstWhere('name', $name);

        $data = Value::parseValue([
            'type' => $type,
            'name' => $name,
            'default' => $default,
            'applied_settings' => $variable['applied_settings'] ?? [],
        ]);


        return $data['settings'];
    }
}
