<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Renderer;

class Element {
    public function __construct(
        private string $tag,
        private array $attributes = [],
        private string $content = '',
    ) {}

    public function addAttribute(string $key, string $value): self
    {
        $this->attributes[$key] = $value;
        return $this;
    }
    
    public function setContent(string $content): self
    {
        $this->content = $content;
        return $this;
    }

    public function getTag(): string
    {
        return $this->tag;
    }

    public function getAttributes(): array
    {
        return $this->attributes;
    }

    public function getAttributesAsString(): string
    {
        $attributes = '';

        foreach ($this->attributes as $key => $value) {
            $attributes .= " $key=\"$value\"";
        }

        return $attributes;
    }

    public function getContent(): string
    {
        return $this->content;
    }
}
