<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Models\Script;
use Illuminate\Support\Collection;

class ScriptManager {
    private Collection $scripts;

    public function __construct(
    ) {
        $this->scripts = $this->renderScript();
    }

    protected function renderScript(): Collection
    {
        return Script::active()->get();
    }

    public function getScripts(): Collection
    {
        return $this->scripts;
    }
}
