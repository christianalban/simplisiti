<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Illuminate\Support\Collection;

class HeadManager extends Manager {
    private Collection $heads;

    public function __construct(
    ) {
        $this->heads = new Collection;
    }

    public function addHead(string $head): void
    {
        $this->heads->add($head);
    }

    public function getHeads(): Collection
    {
        return $this->heads;
    }
}
