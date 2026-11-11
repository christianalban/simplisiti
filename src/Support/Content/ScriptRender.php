<?php

namespace Alban\Simplisiti\Support\Content;

use Alban\Simplisiti\Models\Page;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;

class ScriptRender
{
    public function renderPageScripts(Page $page): void
    {
        $app = app(SimplisitiApp::class);
        $app->getScriptManager()->resetComponentScripts();
        $renderedComponents = [];

        foreach ($page->sections as $section) {
            foreach ($section->components as $component) {
                $componentKey = $component->getKey() ?? 'name:' . $component->name;

                if (isset($renderedComponents[$componentKey])) {
                    continue;
                }

                $renderedComponents[$componentKey] = true;
                $scripts = trim((string) $component->scripts);

                if ($scripts !== '') {
                    $app->addScripts($scripts);
                }
            }
        }
    }
}
