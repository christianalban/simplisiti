<?php

namespace Alban\Simplisiti\Support\Plugin\Containers\Values\Setting;

use Alban\Simplisiti\Models\Setting;

class InputContainerSetting implements ContainerSetting
{
    public function getValue(Setting $data): mixed {
        return $data->value['value'] ?? null;
    }
}
