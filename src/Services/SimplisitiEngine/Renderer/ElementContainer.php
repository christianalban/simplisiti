<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Renderer;

class ElementContainer {
    private Renderer $start;
    private Renderer $end;

    public function __construct(
    ) {
        $this->start = new Renderer;
        $this->end = new Renderer;
    }

    public function createAtStart(string $tag): Element {
        return $this->start->createTag($tag);
    }

    public function createAtEnd(string $tag): Element {
        return $this->end->createTag($tag);
    }

    public function atStart(): Renderer
    {
        return $this->start;
    }

    public function atEnd(): Renderer
    {
        return $this->end;
    }
}
