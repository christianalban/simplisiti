<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Illuminate\Support\Collection;

class BodyManager {
    private Collection $body;
    private Collection $bodyAppend;

    public function __construct(
    ) {
        $this->body = new Collection;
        $this->bodyAppend = new Collection;
    }

    public function addBody(string $body): void
    {
        $this->body->add($body);
    }

    public function getBody(): Collection
    {
        return $this->body;
    }

    public function addBodyAppend(string $body): void
    {
        $this->bodyAppend->add($body);
    }

    public function getBodyAppend(): Collection
    {
        return $this->bodyAppend;
    }
}
