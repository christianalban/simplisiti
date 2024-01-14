<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Models\Style;
use Illuminate\Support\Collection;

class StyleManager {
    private Collection $styles;

    public function __construct(
    ) {
        $this->styles = $this->renderStyle();
    }

    protected function renderStyle(): Collection
    {
        return Style::active()->get();
    }

    public function getStyles(): Collection
    {
        return $this->styles;
    }
}
