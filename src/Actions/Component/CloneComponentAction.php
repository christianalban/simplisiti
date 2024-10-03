<?php

namespace Alban\Simplisiti\Actions\Component;

use Alban\Simplisiti\Events\ComponentCreated;
use Alban\Simplisiti\Models\Component;
use Alban\Simplisiti\Support\Action\HandleSettings;

class CloneComponentAction
{
    use HandleSettings;

    public function execute(Component $component): Component
    {
        $component = $component->replicate();

        $component->name = $component->name . '_clone';

        $component->save();

        ComponentCreated::dispatch($component);

        return $component;
    }
}
