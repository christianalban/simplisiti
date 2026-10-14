<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Settings;

abstract class Settings
{
    protected string $type;
    protected string $name;
    protected string|array|int|float|null $default;
    protected array $applied_settings = [];
    protected array $options = [];

    public function __construct(array $variable, array $options = []) {
        $this->type = $variable['type'];
        $this->name = $variable['name'] ?? '';
        $this->default = $variable['default'] ?? null;
        $this->applied_settings = $variable['applied_settings'] ?? [];
        $this->options = $options;
    }

    abstract public function merge(array|string|int|float|null $merge);

    public static function mergeSettings(array $variable, array|string|int|float|null $settings, array $options = [])
    {
        return self::makeValue($variable, $options)->merge($settings);
    }

    private static function makeValue(array $variable, array $options = [])
    {
        $valueType = match ($variable['type']) {
            // 'resource' => ResourceValue::class,
            'datatable' => DataTableSettings::class,
            // 'textarea' => TextAreaValue::class,
            // 'datasource' => DataSourceValue::class,
            // 'action' => ActionValue::class,
            // 'page' => PageValue::class,
            'checkbox' => CheckboxSettings::class,
            default => TextSettings::class,
        };
 
        return new $valueType($variable, $options);
    }
}
