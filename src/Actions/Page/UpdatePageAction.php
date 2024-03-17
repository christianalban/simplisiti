<?php

namespace Alban\Simplisiti\Actions\Page;

use Alban\Simplisiti\Events\PageUpdated;
use Alban\Simplisiti\Models\Page;
use Alban\Simplisiti\Traits\PageUtils;
use Illuminate\Support\Facades\DB;

class UpdatePageAction
{
    use PageUtils;

    public function execute(Page $page, array $data): Page
    {
        return DB::transaction(function() use ($page, $data) {
            $page->update([
                'name' => $data['name'],
                'url' => $data['url'],
                'title' => $data['title'],
            ]);

            $this->forPage($page);

            $this->deleteRemovedSections($data['sections']);

            $sectionsData = collect($data['sections']);

            $toUpdateSections = $sectionsData->filter(function($sectionData) {
                return array_key_exists('id', $sectionData);
            });

            $this->updateSections($toUpdateSections->toArray());

            $toCreateSections = $sectionsData->filter(function($sectionData) {
                return !array_key_exists('id', $sectionData);
            });

            $this->createSections($toCreateSections->toArray());

            PageUpdated::dispatch($page);

            return $page;
        });
    }
}
