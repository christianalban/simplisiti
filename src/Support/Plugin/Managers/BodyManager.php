<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Illuminate\Support\Collection;

class BodyManager {
    private Collection $body;
    private Collection $attributes;

    public function __construct(
    ) {
        $this->body = new Collection;
        $this->attributes = new Collection;
    }

    public function addBody(string $body): void
    {
        $this->body->add($body);
    }

    public function getBody(): Collection
    {
        return $this->body;
    }

    public function addBodyAttributes(string $attributes): void
    {
        $this->attributes->add($attributes);
    }

    public function getBodyAttributes(): Collection
    {
        return $this->attributes;
    }
}
