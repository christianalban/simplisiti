<?php

namespace Alban\Simplisiti\Controllers;

use Alban\Simplisiti\Http\Resources\ActionResource;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use App\Http\Controllers\Controller;

class ActionController extends Controller {
    public function __construct(
        private SimplisitiApp $app
    )
    {
        $this->app->loadSettings();

        $this->app->loadHeaders();

        $this->app->loadActions();

        $this->app->loadPlugins();

        $this->app->init();
    }
    public function index() {
        $actions = $this->app->getActionManager()->getActionList();

        return ActionResource::collection($actions);
    }
}
