<?php

namespace Alban\Simplisiti\Requests\Script;

use Illuminate\Foundation\Http\FormRequest;

class StoreScriptRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255|unique:scripts',
            'scripts' => 'required|string',
            'is_active' => 'required|boolean',
        ];
    }
}
