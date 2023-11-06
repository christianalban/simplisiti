<?php

namespace Alban\Simplisiti\Traits;

use Alban\Simplisiti\Models\ComponentSection;
use Alban\Simplisiti\Models\Page;
use Alban\Simplisiti\Models\Section;

trait PageUtils {

    public function getPage(?Page $page = null): Page {
        return $page ?? $this->page;
    }

    public function forPage($page): self {
        $this->page = $page;
        return $this;
    }

    public function forSection($section): self {
        $this->section = $section;
        return $this;
    }

    public function createSections($sections, ?Page $page = null): self {
        foreach ($sections as $section) {
            $createdSection = $this->getPage($page)->sections()->create([
                'order' => $section['order'],
            ]);

            $this->forSection($createdSection)->createComponents($section['components']);
        }

        return $this;
    }

    public function createComponents($components, ?Section $section = null): self {
        $componentsData = collect($components)->map(function($component) {
            return $this->parseComponentData($component);
        });

        $componentsData->each(function($component) use ($section) {
            ($section ?? $this->section)->components()->attach($component['id'], $this->parseComponentContent($component));
        });

        return $this;
    }

    public function parseComponentData($component): array {
        return [
            'id' => $component['id'],
            'order' => $component['order'],
            'content' => collect($component['variables'])->reduce(function($content, $variable) {
                $content[$variable['name']] = $variable['default'];
                return $content;
            }, [])
        ];
    }

    public function parseComponentContent($component): array {
        return [
            'order' => $component['order'],
            'content' => $component['content'],
        ];
    }

    public function deleteRemovedSections(array $sections, ?Page $page = null): self {
        $sectionsData = collect($sections);

        $this->getPage($page)->sections()->whereNotIn('id', $sectionsData->pluck('id')->filter()->toArray())->delete();

        return $this;
    }

    public function updateSections(array $sections, ?Page $page = null): self {
        $toUpdateSections = collect($sections);

        $toUpdateSections->each(function($sectionsData) use ($page) {
            $toUpdateData = $sectionsData;

            unset($toUpdateData['id']);
            unset($toUpdateData['components']);

            $section = $this->getPage($page)->sections()->firstWhere('id', $sectionsData['id']);

            $section->update($toUpdateData);

            $componentsData = collect($sectionsData['components'])->map(function($component) {
                $data = $this->parseComponentData($component);

                if (array_key_exists('content_id', $component)) {
                    $data['content_id'] = $component['content_id'];
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
                    ComponentSection::where('id', $component['content_id'])->update($this->parseComponentContent($component));
                } else {
                    // Create new components
                    $section->components()->attach($component['id'], $this->parseComponentContent($component));
                }
            });
        });

        return $this;
    }
}
