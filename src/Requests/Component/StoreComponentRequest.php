<?php

namespace Alban\Simplisiti\Requests\Component;

use Illuminate\Foundation\Http\FormRequest;

class StoreComponentRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255|unique:components',
            'html' => 'required|string',
            'variables' => 'nullable|array',
            'variables.*.type' => 'required|in:text,number,tel,email,url,password,checkbox,radio,date,time,datetime-local,color,resource,datatable,textarea,datasource,action,page,select',
            'variables.*.name' => 'required|string|max:255',
            'variables.*.default' => 'nullable',
            'variables.*.options' => 'nullable',
            'variables.*.settings.*.items.*.name' => 'required',
            'variables.*.settings.*.items.*.plugin' => 'required',
            'variables.*.settings.*.items.*.value' => 'required',
        ];
    }
}
