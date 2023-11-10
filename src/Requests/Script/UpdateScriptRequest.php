<?php

namespace Alban\Simplisiti\Requests\Script;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateScriptRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255', Rule::unique('scripts')->ignore($this->script)],
            'scripts' => 'required|string',
            'is_active' => 'required|boolean',
        ];
    }
}
