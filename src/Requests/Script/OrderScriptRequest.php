<?php

namespace Alban\Simplisiti\Requests\Script;

use Illuminate\Foundation\Http\FormRequest;

class OrderScriptRequest extends FormRequest
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
            'list.*.id' => 'required|integer|exists:scripts,id',
            'list.*.order' => 'required|integer',
        ];
    }
}
