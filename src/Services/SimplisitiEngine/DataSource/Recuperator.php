<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\DataSource;

class Recuperator
{
    public function __construct(
        private mixed $data
    ) {
        if (is_array($this->data)) {
            $this->loadPropertiesAsClassProperties();
        }
    }

    private function loadPropertiesAsClassProperties(): void
    {
        foreach ($this->data as $key => $value) {
            $this->{$key} = $value;
        }
    }

    public function get(string $dotNotation): mixed
    {
        $dotNotation = explode('.', $dotNotation);

        $data = $this->data;

        foreach($dotNotation as $key) {
            if (is_array($data) && array_key_exists($key, $data)) {
                $data = $data[$key];
            } else {
                return null;
            }
        }

        return $data;
    }
}
