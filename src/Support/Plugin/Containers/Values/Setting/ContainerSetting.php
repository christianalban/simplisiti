<?php

namespace Alban\Simplisiti\Support\Plugin\Containers\Values\Setting;

use Alban\Simplisiti\Models\Setting;

interface ContainerSetting
{
    public function getValue(Setting $data): mixed;
}
