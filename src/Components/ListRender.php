<?php

namespace Alban\Simplisiti\Components;

use Alban\Simplisiti\Services\SimplisitiEngine\DataSource\DataSourceRecovery;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class ListRender extends Component
{
    public DataSourceRecovery $dataSourceRecovery;
    /**
     * Create a new component instance.
     */
    public function __construct(
        public array $items,
    ) {
        $this->dataSourceRecovery = new DataSourceRecovery;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('simplisiti::components.list-render');
    }
}
