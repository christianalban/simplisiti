<?php

namespace Alban\Simplisiti\Requests\Setting;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSettingRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'items' => 'required|array',
            'items.*.plugin' => 'required|string',
            'items.*.name' => 'required|string',
            'items.*.value' => 'required|string',
        ];
    }
}
