<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Illuminate\Support\Collection;

class HeadManager {
    private Collection $heads;

    public function __construct(
    ) {
        $this->heads = new Collection;
    }

    public function add(string $tag, array $attributes): void
    {
        $head = "<$tag";
        foreach ($attributes as $key => $value) {
            $head .= " $key=\"$value\"";
        }
        $head .= ">";

        $this->heads->add($head);
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
