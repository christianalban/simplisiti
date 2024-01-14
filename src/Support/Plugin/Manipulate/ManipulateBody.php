<?php

namespace Alban\Simplisiti\Support\Plugin\Manipulate;

use Alban\Simplisiti\Support\Plugin\Managers\BodyManager;

interface ManipulateBody {
    public function withBody(BodyManager $bodyManager): void;
}
