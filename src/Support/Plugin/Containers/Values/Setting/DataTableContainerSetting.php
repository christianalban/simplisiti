<?php

namespace Alban\Simplisiti\Support\Plugin\Containers\Values\Setting;

use Alban\Simplisiti\Models\Setting;

class DataTableContainerSetting implements ContainerSetting
{
    public function getValue(Setting $data): mixed {
        $value = $data->value['value'] ?? null;
        return collect($value['rows'] ?? [])->map(function ($row) {
            $obj = collect($row)->mapWithKeys(function ($value) {
                return [$value['name'] => $value['default'] ?? null];
            })->toArray();
            return $obj;
        })->toArray();
    }
}
