<?php
namespace Alban\Simplisiti\Support\Plugin\Containers;

use Illuminate\Http\Request;

class ActionContainer
{
    private array $data = [];

    public function __construct(
        private Request $request
    ) {}

    public function add(string $key, $data): self
    {
        $this->data[$key] = $data;

        return $this;
    }

    public function get(string $key): mixed
    {
        return $this->data[$key];
    }

    public function all(): array
    {
        return $this->data;
    }

    public function getRequest(): Request
    {
        return $this->request;
    }
}
