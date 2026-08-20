<?php

namespace Alban\Simplisiti\Controllers;

use Alban\Simplisiti\Http\Resources\ActionResource;

class ActionController extends SimplisitiAppController {

    public function index() {
        $actions = $this->app->getActionManager()->getActionList();

        return ActionResource::collection($actions);
    }
}
