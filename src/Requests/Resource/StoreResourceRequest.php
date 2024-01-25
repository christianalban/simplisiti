<?php

namespace Alban\Simplisiti\Requests\Resource;

use Illuminate\Foundation\Http\FormRequest;

class StoreResourceRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255|unique:resources',
            'file' => 'required|file|mimetypes:image/jpeg,image/svg+xml,image/png,image/webp,video/mp4,application/pdf,image/gif,application/vnd.rar,application/x-7z-compressed,font/woff,font/woff2,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,font/ttf,image/vnd.microsoft.icon',
        ];
    }
}
