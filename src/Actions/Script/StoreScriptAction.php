<?php

namespace Alban\Simplisiti\Actions\Script;

use Alban\Simplisiti\Models\Script;

class StoreScriptAction
{
    public function execute(array $data): Script
    {
        return Script::create($data);
    }
}
