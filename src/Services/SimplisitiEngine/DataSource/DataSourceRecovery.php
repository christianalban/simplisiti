<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\DataSource;

class DataSourceRecovery
{
    public function toRecover(mixed $data): Recuperator
    {
        return new Recuperator($data);
    }
}
