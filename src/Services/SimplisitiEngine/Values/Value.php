<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Values;

abstract class Value
{
    protected string $type;
    protected string $name;
    protected string|null $default;

    public function __construct(array $variable) {
        $this->type = $variable['type'];
        $this->name = $variable['name'];
        $this->default = $variable['default'];
    }

    abstract public function parse();

    public static function parseValue(array $variable)
    {
        $valueType = match ($variable['type']) {
            'text' => TextValue::class,
            'resource' => ResourceValue::class,
        };

        return [
            'type' => $variable['type'],
            'name' => $variable['name'],
            'default' => $variable['default'],
            'value' => (new $valueType($variable))->parse(),
        ];
    }
}
