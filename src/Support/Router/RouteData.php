<?php

namespace Alban\Simplisiti\Support\Action;

use Alban\Simplisiti\Support\Plugin\Managers\ActionManager;
use Closure;

class RouteData {
    public function __construct(
        private string $method,
        private string $path,
        private Closure $action,
        private ActionManager $actionManager,
    ) {}

    public function getMethod(): string
    {
        return $this->method;
    }

    public function getPath(): string
    {
        return $this->path;
    }

    public function getAction(): callable
    {
        return $this->action;
    }

    public function execute($request, $params): mixed
    {
        $callable = $this->getAction();

        return $callable($this->actionManager, $request, ...$params);
    }
}
