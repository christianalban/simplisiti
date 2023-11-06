<?php

namespace Alban\Simplisiti\Actions\Page;

use Alban\Simplisiti\Models\Page;
use Illuminate\Support\Facades\DB;

class StorePageAction
{
    public function execute(array $data): Page
    {
        return DB::transaction(function() use ($data) {
            $page = Page::create([
                'name' => $data['name'],
                'url' => $data['url'],
            ]);

            foreach ($data['sections'] as $section) {
                $componentsData = collect($section['components'])->map(function($component) {
                    return [
                        'id' => $component['id'],
                        'order' => $component['order'],
                        'content' => collect($component['variables'])->reduce(function($content, $variable) {
                            $content[$variable['name']] = $variable['default'];
                            return $content;
                        }, [])
                    ];
                });

                $section = $page->sections()->create([
                    'order' => $section['order'],
                ]);

                $componentsData->each(function($component) use ($section) {
                    $section->components()->attach($component['id'], [
                        'order' => $component['order'],
                        'content' => $component['content'],
                    ]);
                });
            }

            return $page;
        });
    }
}
