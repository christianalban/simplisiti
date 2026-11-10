<?php

namespace Alban\Simplisiti\Support\Content;

use Alban\Simplisiti\Models\Page;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;

class StyleRender
{
    public function renderPageStyles(Page $page): void
    {
        $app = app(SimplisitiApp::class);
        $app->getStyleManager()->resetComponentStyles();
        $renderedComponents = [];

        foreach ($page->sections as $section) {
            foreach ($section->components as $component) {
                $componentKey = $component->getKey() ?? 'name:' . $component->name;

                if (isset($renderedComponents[$componentKey])) {
                    continue;
                }

                $renderedComponents[$componentKey] = true;
                $styles = trim((string) $component->styles);

                if ($styles === '') {
                    continue;
                }

                $className = ComponentClassName::forName($component->name);
                $app->addStyles(".{$className} {\n{$styles}\n}\n");
            }
        }

        $app->addStyles($this->getEditorLayoutStyles());
    }

    private function getEditorLayoutStyles(): string
    {
        $paths = [
            base_path('vendor/alban/simplisiti/src/resources/css/simplisiti-component-editor/style.css'),
            dirname(__DIR__, 2) . '/resources/css/simplisiti-component-editor/style.css',
        ];

        foreach ($paths as $path) {
            if (is_file($path)) {
                return (string) file_get_contents($path);
            }
        }

        throw new \RuntimeException('The Simplisiti editor layout stylesheet could not be found.');
    }
}
