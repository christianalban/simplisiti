<?php

namespace Alban\Simplisiti\Actions\Script;

use Alban\Simplisiti\Events\ScriptUpdated;
use Alban\Simplisiti\Models\Script;

class UpdateScriptAction
{
    public function execute(Script $script, array $data): Script
    {
        $script->update($data);

        ScriptUpdated::dispatch($script);

        return $script;
    }
}
