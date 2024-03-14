<?php

namespace Alban\Simplisiti\Actions\Component;

use Alban\Simplisiti\Models\Component;
use Alban\Simplisiti\Support\Action\HandleSettings;

class UpdateComponentAction
{
    use HandleSettings;

    public function execute(Component $component, array $data): Component
    {
        $data = $this->setApplicationSettings($data);

        $component->update($data);

        return $component;
    }
}
