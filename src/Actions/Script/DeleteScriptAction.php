<?php

namespace Alban\Simplisiti\Actions\Script;

use Alban\Simplisiti\Models\Script;

class DeleteScriptAction
{
    public function execute(Script $script): bool
    {
        return $script->delete();
    }
}
