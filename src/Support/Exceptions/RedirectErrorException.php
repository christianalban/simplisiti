<?php
namespace Alban\Simplisiti\Support\Exceptions;

class RedirectErrorException extends \Exception
{
    public function __construct(
        private string $route, 
        private array $data
    ) {}

    public function getRoute(): string
    {
        return $this->route;
    }

    public function getData(): array
    {
        return $this->data;
    }
}
