<?php

namespace Alban\Simplisiti\Actions\Script;

use Alban\Simplisiti\Models\Script;

class UpdateScriptAction
{
    public function execute(Script $script, array $data): Script
    {
        $script->update($data);

        return $script;
    }
}
