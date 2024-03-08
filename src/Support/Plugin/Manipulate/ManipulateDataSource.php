<?php

namespace Alban\Simplisiti\Support\Plugin\Manipulate;

use Alban\Simplisiti\Support\Plugin\Managers\DataSourceManager;

interface ManipulateDataSource {
    public function withDataSources(DataSourceManager $dataSourceManager): void;
}
