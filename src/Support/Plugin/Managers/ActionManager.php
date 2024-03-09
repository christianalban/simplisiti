<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Support\Action\ActionData;
use Alban\Simplisiti\Support\Plugin\Manipulate\ManipulateAction;
use Closure;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

class ActionManager {
    private array $actions = [];

    public function getActionList(): array
    {
        return array_keys($this->actions);
    }

    public function addAction(ManipulateAction $manipulateAction, string $key, string $method, string $path, Closure $action): void
    {
        $namespaces = explode('\\', get_class($manipulateAction));
        $first = Str::of($namespaces[0])->kebab()->lower();
        $package = Str::of($namespaces[1])->kebab()->lower();

        $this->actions["$first.$package:$key"] = new ActionData(
            method: $method,
            path: $path,
            action: $action
        );
    }

    public function getAction(string $key): ActionData
    {
        return $this->actions[$key];
    }

    public function registerActions(): void
    {
        foreach ($this->actions as $key => $action) {
            $method = $action->getMethod();
            $path = $action->getPath();
            $callable = $action->getAction();
            Route::$method($path, $callable)->name($key);
        }
    }
}
