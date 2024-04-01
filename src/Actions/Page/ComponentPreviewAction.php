<?php

namespace Alban\Simplisiti\Actions\Page;

use Alban\Simplisiti\Models\Component;
use Alban\Simplisiti\Support\Content\ContentRender;
use Illuminate\Http\Request;

class ComponentPreviewAction implements PreviewAction
{
    private Component $component;
    private ?array $content;

    public function __construct(Request $request)
    {
        $this->component = Component::findOrFail($request->component);
        $this->content = $request->content;
    }

    public function execute(): string
    {
        $contentRenderer = new ContentRender();

        return $contentRenderer->renderComponentContent($this->component, $this->content);
    }
}
