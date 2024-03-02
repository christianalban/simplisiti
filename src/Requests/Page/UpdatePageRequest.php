<?php

namespace Alban\Simplisiti\Requests\Page;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdatePageRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255', Rule::unique('pages')->ignore($this->page)],
            'url' => ['required', Rule::unique('pages')->ignore($this->page)],
            'title' => 'nullable|string',
            'sections' => 'required|array',
            'sections.*.id' => 'sometimes|required|integer|exists:sections,id',
            'sections.*.order' => 'required|integer|min:0',
            'sections.*.components' => 'required|array',
            'sections.*.components.*.id' => 'required|integer|exists:components,id',
            'sections.*.components.*.order' => 'required|integer|min:0',
            'sections.*.components.*.variables' => 'nullable|array',
            'sections.*.components.*.content' => 'nullable|array',
            'sections.*.components.*.content_id' => 'sometimes|required|integer|exists:component_section,id',
        ];
    }
}
