<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Support\Action\ActionData;
use Alban\Simplisiti\Support\Plugin\Manipulate\ManipulateAction;
use Closure;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class ActionManager extends Manager {
    private array $events = [];

    public function register(string $eventName, callable $callback) {
        if (!isset($this->events[$eventName])) {
            $this->events[$eventName] = [];
        }
        $this->events[$eventName][] = $callback;
    }

    public function trigger(string $eventName, array $params = []) {
        if (isset($this->events[$eventName])) {
            foreach ($this->events[$eventName] as $callback) {
                call_user_func($callback, $params);
            }
        }
    }

    // private array $actions = [];
    // private array $events = [];
    // private array $after = [];
    // private array $before = [];
    // private string $selectedKey;
    //
    // public function getActionList(): array
    // {
    //     return array_keys($this->actions);
    // }
    //
    // public function addAction(ManipulateAction $manipulateAction, string $key, string $method, string $path, Closure $action): self
    // {
    //     $namespaces = explode('\\', get_class($manipulateAction));
    //     $first = Str::of($namespaces[0])->kebab()->lower();
    //     $package = Str::of($namespaces[1])->kebab()->lower();
    //     $compoundKey = "$first.$package:$key";
    //     $this->selectedKey = $compoundKey;
    //
    //     $this->actions[$compoundKey] = new ActionData(
    //         method: $method,
    //         path: $path,
    //         action: $action
    //     );
    //
    //     return $this;
    // }
    //
    // public function getAction(string $key): ActionData
    // {
    //     return $this->actions[$key];
    // }
    //
    // public function registerActions(): void
    // {
    //     foreach ($this->actions as $key => $action) {
    //         $this->associateAfterEvent($key);
    //         $this->associateBeforeEvent($key);
    //         $method = $action->getMethod();
    //         $path = $action->getPath();
    //         $callable = $action->getAction();
    //         Route::$method($path, function(Request $request, ...$params) use ($key, $callable) {
    //             $response = null;
    //
    //             $data = $this->runBeforeEvents($request, $key);
    //             if ($data) {
    //                 $response = $data;
    //                 if ($response->getSession()->has('errors')) {
    //                     return $response;
    //                 
    //                 };
    //             }
    //             
    //             $data = $callable($request, ...$params);
    //             if ($data) {
    //                 $response = $data;
    //
    //                 return $response;
    //                 // TODO: Handle errors response
    //                 // if ($response->getSession()->has('errors')) {
    //                 //     return $response;
    //                 // };
    //             }
    //
    //             $data = $this->runAfterEvents($request, $key);
    //             if ($data) {
    //                 $response = $data;
    //             }
    //
    //             return $response;
    //         
    //         })->name($key);
    //     }
    // }
    //
    // public function asEvent(?string $alias = null): void
    // {
    //     $this->registerEvent($this->selectedKey, $alias);
    // }
    //
    // private function registerEvent(string $key, ?string $alias = null): void
    // {
    //     $this->events[$key] = [
    //         'before' => [],
    //         'after' => [],
    //         'alias' => $alias
    //     ];
    // }
    //
    // private function associateAfterEvent(string $key): void
    // {
    //     if (!isset($this->events[$key])) {
    //         return;
    //     }
    //
    //     $alias = $this->events[$key]['alias'];
    //
    //     if ($alias && array_key_exists($alias, $this->after)) {
    //         $this->events[$key]['after'] = $this->after[$alias];
    //     }
    //
    //     if (array_key_exists($key, $this->after)) {
    //         $this->events[$key]['after'] = $this->after[$key];
    //     }
    // }
    //
    // private function associateBeforeEvent(string $key): void
    // {
    //     if (!isset($this->events[$key])) {
    //         return;
    //     }
    //
    //     $alias = $this->events[$key]['alias'];
    //
    //     if ($alias && array_key_exists($alias, $this->before)) {
    //         $this->events[$key]['before'] = $this->before[$alias];
    //     }
    //
    //     if (array_key_exists($key, $this->before)) {
    //         $this->events[$key]['before'] = $this->before[$key];
    //     }
    // }
    //
    // protected function runBeforeEvents(Request $request, string $key)
    // {
    //     $response = null;
    //
    //     if (!isset($this->events[$key])) {
    //         return $response;
    //     }
    //
    //     foreach ($this->events[$key]['before'] as $event) {
    //         $data = $event($request);
    //         
    //         if ($data) {
    //             $response = $data;
    //         }
    //     }
    //
    //     return $response;
    // }
    //
    // protected function runAfterEvents(Request $request, string $key)
    // {
    //     $response = null;
    //
    //     if (!isset($this->events[$key])) {
    //         return $response;
    //     }
    //
    //     foreach ($this->events[$key]['after'] as $event) {
    //         $data = $event($request);
    //
    //         if ($data) {
    //             $response = $data;
    //         }
    //     }
    //
    //     return $response;
    // }
    //
    // public function beforeAction(string $key, Closure $action): self
    // {
    //     $this->before[$key][] = $action;
    //
    //     return $this;
    // }
    //
    // public function afterAction(string $key, Closure $action): self
    // {
    //     $this->after[$key][] = $action;
    //
    //     return $this;
    // }
}
