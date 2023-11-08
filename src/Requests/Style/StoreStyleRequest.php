<?php

namespace Alban\Simplisiti\Requests\Style;

use Illuminate\Foundation\Http\FormRequest;

class StoreStyleRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255|unique:styles',
            'styles' => 'required|string',
            'is_active' => 'required|boolean',
        ];
    }
}
