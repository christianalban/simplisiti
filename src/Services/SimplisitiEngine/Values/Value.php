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
        $this->name = $variable['name'] ?? '';
        $this->default = $variable['default'] ?? null;
        $this->applied_settings = $variable['applied_settings'] ?? [];
        $this->options = $options;
    }

    abstract public function parse();
    abstract public function merge(array|string|int|null $merge);

    public static function parseValue(array $variable, array $options = [])
    {
        return self::makeValue($variable, $options)->parse();
    }

    public static function mergeContent(array $variable, array|string|int|null $content, array $options = [])
    {
        return self::makeValue($variable, $options)->merge($content);
    }

    private static function makeValue(array $variable, array $options = [])
    {
        $valueType = match ($variable['type']) {
            'resource' => ResourceValue::class,
            'datatable' => DataTableValue::class,
            'textarea' => TextAreaValue::class,
            'datasource' => DataSourceValue::class,
            'action' => ActionValue::class,
            'page' => PageValue::class,
            default => TextValue::class,
        };

        return new $valueType($variable, $options);
    }
}
