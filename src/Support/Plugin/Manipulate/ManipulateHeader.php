<?php

namespace Alban\Simplisiti\Support\Plugin\Manipulate;

use Alban\Simplisiti\Support\Plugin\Managers\HeadManager;

interface ManipulateHeader {
    public function withHeaders(HeadManager $headManager): void;
}
