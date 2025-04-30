<?php

namespace Alban\Simplisiti\Support\Content;

use Alban\Simplisiti\Models\Page;
use Alban\Simplisiti\Support\Plugin\Managers\ParameterManager;

class TitlePageRender
{
    public function renderPageTitle(Page $page, ParameterManager $parameterManager): string
    {
        $parametersBag = $parameterManager->extractParameters($page->title);

        $renderedTitle = $page->title;
        foreach ($parametersBag as $parameter) {
            $parameterName = str_replace(['{', '}'], '', $parameter);
            $value = $parameterManager->getParameter($parameterName);
            if ($value) {
                $renderedTitle = str_replace('{'.$parameter.'}', $value, $renderedTitle);
            }
        }
        return $renderedTitle;
    }
}
