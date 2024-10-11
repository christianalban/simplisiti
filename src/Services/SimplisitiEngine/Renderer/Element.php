<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Renderer;

class Element {
    public function __construct(
        private string $tag,
        private array $attributes = [],
        private string $content = '',
        private bool $noCloseTag = false,
        private array $onlyOnPage = [],
        private array $exceptOnPage = [],
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

    public function noClose(): self
    {
        $this->noCloseTag = true;
        return $this;
    }

    public function onlyOnPage(string|array $pages): self
    {
        if (is_string($pages)) {
            $pages = [$pages];
        }
        $this->onlyOnPage = $pages;
        return $this;
    }

    public function exceptOnPage(string|array $pages): self
    {
        if (is_string($pages)) {
            $pages = [$pages];
        }
        $this->exceptOnPage = $pages;
        return $this;
    }

    public function getOnlyOnPage(): array
    {
        return $this->onlyOnPage;
    }

    public function getExceptOnPage(): array
    {
        return $this->exceptOnPage;
    }

    public function getNoClose(): bool
    {
        return $this->noCloseTag;
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

    public function onlyForCurrentPage(): bool
    {
        if (empty($this->onlyOnPage)) {
            return true;
        }

        $page = request()->route()->getName();

        return in_array($page, $this->onlyOnPage);
    }

    public function exceptForCurrentPage(): bool
    {
        if (empty($this->exceptOnPage)) {
            return true;
        }

        $page = request()->route()->getName();

        return !in_array($page, $this->exceptOnPage);
    }
}
