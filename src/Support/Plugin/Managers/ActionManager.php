<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Support\Action\ActionData;
use Alban\Simplisiti\Support\Plugin\Containers\ActionContainer;
use Alban\Simplisiti\Support\Plugin\Manipulate\ManipulateAction;
use Closure;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class ActionManager {
    private array $actions = [];
    private array $events = [];
    private string $selectedKey;

    public function getActionList(): array
    {
        return array_keys($this->actions);
    }

    public function addAction(ManipulateAction $manipulateAction, string $key, string $method, string $path, Closure $action): self
    {
        $namespaces = explode('\\', get_class($manipulateAction));
        $first = Str::of($namespaces[0])->kebab()->lower();
        $package = Str::of($namespaces[1])->kebab()->lower();
        $compoundKey = "$first.$package:$key";
        $this->selectedKey = $compoundKey;

        $this->actions[$compoundKey] = new ActionData(
            method: $method,
            path: $path,
            action: $action
        );

        return $this;
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
            Route::$method($path, function(Request $request, ...$params) use ($key, $callable) {
                $container = new ActionContainer($request);
                $this->runBeforeEvents($container, $key);
                $response = $callable($container, ...$params);
                $this->runAfterEvents($container, $key);

                return $response;
            
            })->name($key);
        }
    }

    public function asEvent(): void
    {
        $this->registerEvent($this->selectedKey);
    }

    private function registerEvent(string $key): void
    {
        $this->events[$key] = [
            'before' => [],
            'after' => []
        ];
    }

    protected function runBeforeEvents(ActionContainer $request, string $key): void
    {
        foreach ($this->events[$key]['before'] as $event) {
            $event($request);
        }
    }

    protected function runAfterEvents(ActionContainer $request, string $key): void
    {
        foreach ($this->events[$key]['after'] as $event) {
            $event($request);
        }
    }

    public function beforeAction(string $key, Closure $event): self
    {
        $this->events[$key]['before'][] = $event;

        return $this;
    }

    public function afterAction(string $key, Closure $event): self
    {
        $this->events[$key]['after'][] = $event;

        return $this;
    }
}
