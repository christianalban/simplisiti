<?php

namespace Alban\Simplisiti\Actions\Component;

use Alban\Simplisiti\Models\Component;

class UpdateComponentAction
{
    public function execute(Component $component, array $data): Component
    {
        $component->update($data);

        return $component;
    }
}
