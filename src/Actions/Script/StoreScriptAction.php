<?php

namespace Alban\Simplisiti\Actions\Script;

use Alban\Simplisiti\Models\Script;

class StoreScriptAction
{
    public function execute(array $data): Script
    {
        $lastScriptCount = Script::count();

        $script = Script::make($data);

        $script->order = $lastScriptCount + 1;

        $script->save();

        return $script;
    }
}
