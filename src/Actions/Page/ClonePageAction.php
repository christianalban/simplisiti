<?php

namespace Alban\Simplisiti\Actions\Page;

use Alban\Simplisiti\Events\PageCreated;
use Alban\Simplisiti\Models\Page;
use Alban\Simplisiti\Traits\PageUtils;
use Illuminate\Support\Facades\DB;

class ClonePageAction
{
    use PageUtils;

    public function execute(Page $page): Page
    {
        return DB::transaction(function() use ($page) {
            $clonedPage = $page->replicate();

            $clonedPage->name = $page->name . '_clone';
            $clonedPage->url = $page->url . '-clone';

            $clonedPage->save();

            $page->load('sections.components');

            $this->forPage($clonedPage)->createSections($page->sections->toArray());

            PageCreated::dispatch($page);

            return $page;
        });
    }
}
