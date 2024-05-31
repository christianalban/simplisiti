<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

class ParameterManager {
    private array $parameters = [];

    public function addParameter(string $key, mixed $value): self
    {
        $this->parameters[$key] = $value;

        return $this;
    }

    private function extractParametersFromUrl(string $url): array
    {
        $pattern = '/{[a-z]+}/';

        preg_match_all($pattern, $url, $matches);

        $parameters = array_map(function ($match) {
            return str_replace(['{', '}'], '', $match);
        }, $matches[0]);

        return $parameters;
    }

    public function addParameters(string $url, array $parameters): self
    {
        $parameterNames = $this->extractParametersFromUrl($url);

        foreach ($parameterNames as $index => $parameterName) {
            $this->addParameter($parameterName, $parameters[$index]);
        }

        return $this;
    }

    public function getParameter(string $key, mixed $default = null): mixed
    {
        return $this->parameters[$key] ?? $default;
    }

    public function getParameters(): array
    {
        return $this->parameters;
    }
}
