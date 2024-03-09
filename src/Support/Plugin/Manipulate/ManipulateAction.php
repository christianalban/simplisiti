<?php

namespace Alban\Simplisiti\Support\Plugin\Manipulate;

use Alban\Simplisiti\Support\Plugin\Managers\ActionManager;

interface ManipulateAction {
    public function withActions(ActionManager $actionManager): void;
}
