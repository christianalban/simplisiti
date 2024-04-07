<?php

namespace Alban\Simplisiti\Support\Plugin\Manipulate;

use Alban\Simplisiti\Support\Plugin\Managers\StyleManager;

interface ManipulateStyle {
    public function withStyles(StyleManager $styleManager): void;
}
