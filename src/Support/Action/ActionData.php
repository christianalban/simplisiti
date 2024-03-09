<?php

namespace Alban\Simplisiti\Support\Action;

use Closure;

class ActionData {
    public function __construct(
        private string $method,
        private string $path,
        private Closure $action,
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
}
