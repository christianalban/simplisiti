<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Illuminate\Support\Collection;

class BodyManager {
    private Collection $body;

    public function __construct(
    ) {
        $this->body = new Collection;
    }

    public function addBody(string $body): void
    {
        $this->body->add($body);
    }

    public function getBody(): Collection
    {
        return $this->body;
    }
}
