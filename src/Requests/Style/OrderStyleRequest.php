<?php

namespace Alban\Simplisiti\Requests\Style;

use Illuminate\Foundation\Http\FormRequest;

class OrderStyleRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'list' => 'required|array',
            'list.*.id' => 'required|integer|exists:styles,id',
            'list.*.order' => 'required|integer',
        ];
    }
}
