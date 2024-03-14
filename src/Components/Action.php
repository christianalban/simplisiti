<?php

namespace Alban\Simplisiti\Components;

use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Action extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct(
        public string $action,
        public array $params = [],
    ) {}

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        $actionData = app(SimplisitiApp::class)->getActionManager()->getAction($this->action);

        return view('simplisiti::components.action', [
            'method' => strtoupper($actionData->getMethod()),
        ]);
    }
}
