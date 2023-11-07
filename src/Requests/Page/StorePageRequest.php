<?php

namespace Alban\Simplisiti\Requests\Page;

use Illuminate\Foundation\Http\FormRequest;

class StorePageRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string:max:255|unique:pages',
            'url' => 'required|unique:pages',
            'title' => 'nullable|string',
            'sections' => 'required|array',
            'sections.*.order' => 'required|integer|min:0',
            'sections.*.components' => 'required|array',
            'sections.*.components.*.id' => 'required|integer|exists:components,id',
            'sections.*.components.*.order' => 'required|integer|min:0',
            'sections.*.components.*.variables' => 'required|array',
        ];
    }
}
