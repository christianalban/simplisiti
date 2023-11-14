<?php

namespace Alban\Simplisiti\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Resource extends Model
{
    protected $fillable = [
        'name',
        'path',
        'mime_type',
        'extension',
        'size',
    ];

    public function deleteFile(): void
    {
        Storage::disk(config('simplisiti.resources_disk'))->delete($this->path);
    }
}
