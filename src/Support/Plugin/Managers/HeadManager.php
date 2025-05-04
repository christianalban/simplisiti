<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Illuminate\Support\Collection;

class HeadManager {
    private Collection $heads;
    private Collection $headsEnd;

    public function __construct(
    ) {
        $this->heads = new Collection;
        $this->headsEnd = new Collection;
    }

    public function build(string $tag, array $attributes): string
    {
        $head = "<$tag";
        foreach ($attributes as $key => $value) {
            $head .= " $key=\"$value\"";
        }
        $head .= ">";

        return $head;
    }

    public function add(string $tag, array $attributes): void
    {
        $head = $this->build($tag, $attributes);

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

    public function addEnd(string $tag, array $attributes): void
    {
        $head = $this->build($tag, $attributes);

        $this->headsEnd->add($head);
    }

    public function addEndHead(string $head): void
    {
        $this->headsEnd->add($head);
    }

    public function getHeadsEnd(): Collection
    {
        return $this->headsEnd;
    }
}
