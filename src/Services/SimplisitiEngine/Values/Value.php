<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Values;

abstract class Value
{
    protected string $type;
    protected string $name;
    protected string|array|null $default;
    protected array $applied_settings = [];
    protected array $options = [];

    public function __construct(array $variable, array $options = []) {
        $this->type = $variable['type'];
        $this->name = $variable['name'];
        $this->default = $variable['default'];
        $this->applied_settings = $variable['applied_settings'] ?? [];
        $this->options = $options;
    }

    abstract public function parse();
    abstract public function merge(array|string|int|null $merge);

    public static function parseValue(array $variable, array $options = [])
    {
        $valueType = match ($variable['type']) {
            'text' => TextValue::class,
            'resource' => ResourceValue::class,
            'datatable' => DataTableValue::class,
            'textarea' => TextAreaValue::class,
            'datasource' => DataSourceValue::class,
            'action' => ActionValue::class,
        };

        return (new $valueType($variable, $options))->parse($options);
    }

    public static function mergeContent(array $variable, array|string|int|null $content)
    {
        $valueType = match ($variable['type']) {
            'text' => TextValue::class,
            'resource' => ResourceValue::class,
            'datatable' => DataTableValue::class,
            'textarea' => TextAreaValue::class,
            'datasource' => DataSourceValue::class,
            'action' => ActionValue::class,
        };

        return (new $valueType($variable))->merge($content);
    }
}
