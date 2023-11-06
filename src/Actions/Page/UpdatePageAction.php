<?php

namespace Alban\Simplisiti\Actions\Page;

use Alban\Simplisiti\Models\ComponentSection;
use Alban\Simplisiti\Models\Page;
use Illuminate\Support\Facades\DB;

class UpdatePageAction
{
    public function execute(Page $page, array $data): Page
    {
        return DB::transaction(function() use ($page, $data) {
            $page->update([
                'name' => $data['name'],
                'url' => $data['url'],
            ]);

            $sectionsData = collect($data['sections']);

            $page->sections()->whereNotIn('id', $sectionsData->pluck('id')->filter()->toArray())->delete();

            $toUpdateSections = $sectionsData->filter(function($sectionData) {
                return array_key_exists('id', $sectionData);
            });

            $toUpdateSections->each(function($sectionsData) use ($page) {
                $toUpdateData = $sectionsData;

                unset($toUpdateData['id']);
                unset($toUpdateData['components']);

                $section = $page->sections()->firstWhere('id', $sectionsData['id']);

                $section->update($toUpdateData);

                $componentsData = collect($sectionsData['components'])->map(function($componentData) {
                    $data = [
                        'id' => $componentData['id'],
                        'order' => $componentData['order'],
                        'content' => collect($componentData['variables'])->reduce(function($content, $variable) {
                            $content[$variable['name']] = $variable['default'];
                            return $content;
                        }, [])
                    ];

                    if (array_key_exists('content_id', $componentData)) {
                        $data['content_id'] = $componentData['content_id'];
                    }

                    return $data;
                });

                // Delete components that are not in the request
                ComponentSection::whereNotIn('id', $componentsData->pluck('content_id')->toArray())
                ->where('section_id', $section->id)
                ->delete();
                $componentsData->each(function($component) use ($section) {
                    // Update existing components
                    if (array_key_exists('content_id', $component)) {
                        ComponentSection::where('id', $component['content_id'])->update([
                            'order' => $component['order'],
                            'content' => $component['content'],
                        ]);
                    } else {
                        // Create new components
                        $section->components()->attach($component['id'], [
                            'order' => $component['order'],
                            'content' => $component['content'],
                        ]);
                    }
                });
            });

            $toCreateSections = $sectionsData->filter(function($sectionData) {
                return !array_key_exists('id', $sectionData);
            });

            foreach ($toCreateSections as $section) {
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
