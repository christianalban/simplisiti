<?php

namespace Alban\Simplisiti\Requests\Plugin;

use Illuminate\Foundation\Http\FormRequest;

class InstallPackageRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string',
        ];
    }
}
