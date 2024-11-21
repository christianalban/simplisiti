<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Renderer;

class Renderer {
    private array $elements = [];

    public function createTag(string $tag): Element {
        $element = new Element($tag);

        $this->add($element);

        return $element;
    }

    protected function add(Element $element): self
    {
        $this->elements[] = $element;
        return $this;
    }

    public function getElements(): array
    {
        return $this->elements;
    }
}
