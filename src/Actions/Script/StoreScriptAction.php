<?php

namespace Alban\Simplisiti\Actions\Script;

use Alban\Simplisiti\Models\Script;

class StoreScriptAction
{
    public function execute(array $data): Script
    {
        $script = Script::make($data);

        $script->setNextOrder()->save();

        return $script;
    }
}
