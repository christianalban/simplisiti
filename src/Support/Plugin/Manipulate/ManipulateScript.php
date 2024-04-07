<?php

namespace Alban\Simplisiti\Support\Plugin\Manipulate;

use Alban\Simplisiti\Support\Plugin\Managers\ScriptManager;

interface ManipulateScript {
    public function withScripts(ScriptManager $scriptManager): void;
}
