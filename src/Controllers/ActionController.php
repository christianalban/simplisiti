<?php

namespace Alban\Simplisiti\Controllers;

use Alban\Simplisiti\Http\Resources\ActionResource;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Alban\Simplisiti\Support\Plugin\Managers\ActionManager;
use App\Http\Controllers\Controller;

class ActionController extends Controller {
    private ActionManager $actionManager;

    public function __construct(
        private SimplisitiApp $app
    ) {
        $this->actionManager = $this->app->onManager(ActionManager::class);
    }
    public function index() {
        $actions = $this->actionManager->getActionList();

        return ActionResource::collection($actions);
    }
}
