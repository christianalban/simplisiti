<?php

namespace Alban\Simplisiti\Actions\Page;

use Alban\Simplisiti\Events\PageCreated;
use Alban\Simplisiti\Models\Page;
use Alban\Simplisiti\Traits\PageUtils;
use Illuminate\Support\Facades\DB;

class StorePageAction
{
    use PageUtils;

    public function execute(array $data): Page
    {
        return DB::transaction(function() use ($data) {
            $page = Page::create([
                'name' => $data['name'],
                'url' => $data['url'],
                'title' => $data['title'],
            ]);

            $this->forPage($page)->createSections($data['sections']);

            PageCreated::dispatch($page);

            return $page;
        });
    }
}
