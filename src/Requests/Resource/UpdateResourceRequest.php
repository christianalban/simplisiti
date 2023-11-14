<?php

namespace Alban\Simplisiti\Requests\Resource;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateResourceRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255', Rule::unique('resources')->ignore($this->resource)],
            'file' => 'sometimes|required|file|mimetypes:image/jpeg,image/png',
        ];
    }
}
