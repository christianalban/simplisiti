<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Values;

use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;

class DataSourceValue extends Value
{
    public function parse() {
        $app = app(SimplisitiApp::class);

        $value = $app->getDataSourceManager()->execute($this->default);

        return [
            'type' => $this->type,
            'name' => $this->name,
            'default' => $this->default,
            'value' => $value,
        ];
    }

    public function merge(array|string|int|null $merge) {
        $app = app(SimplisitiApp::class);

        $value = $app->getDataSourceManager()->execute($merge ?? $this->default);

        return $value;
    }
}
