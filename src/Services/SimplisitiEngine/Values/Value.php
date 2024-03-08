<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Values;

abstract class Value
{
    protected string $type;
    protected string $name;
    protected string|array|null $default;

    public function __construct(array $variable) {
        $this->type = $variable['type'];
        $this->name = $variable['name'];
        $this->default = $variable['default'];
    }

    abstract public function parse();
    abstract public function merge(array|string|int|null $merge);

    public static function parseValue(array $variable)
    {
        $valueType = match ($variable['type']) {
            'text' => TextValue::class,
            'resource' => ResourceValue::class,
            'datatable' => DataTableValue::class,
            'textarea' => TextAreaValue::class,
            'datasource' => DataSourceValue::class,
        };

        return (new $valueType($variable))->parse();
    }

    public static function mergeContent(array $variable, array|string|int|null $content)
    {
        $valueType = match ($variable['type']) {
            'text' => TextValue::class,
            'resource' => ResourceValue::class,
            'datatable' => DataTableValue::class,
            'textarea' => TextAreaValue::class,
            'datasource' => DataSourceValue::class,
        };

        return (new $valueType($variable))->merge($content);
    }
}
