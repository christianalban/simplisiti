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
            'name' => 'required|string|max:255|unique:pages',
            'url' => 'required|unique:pages',
            'title' => 'nullable|string',
            'sections' => 'required|array',
            'sections.*.order' => 'required|integer|min:0',
            'sections.*.sp_class_list' => 'nullable|array',
            'sections.*.sp_class_list.*' => 'string|starts_with:sp-style__',
            'sections.*.sp_style_list' => 'nullable|array:background-color',
            'sections.*.sp_style_list.background-color' => 'nullable|string|max:255',
            'sections.*.components' => 'required|array',
            'sections.*.components.*.id' => 'required|integer|exists:components,id',
            'sections.*.components.*.order' => 'nullable|integer|min:0',
            'sections.*.components.*.variables' => 'required|array',
            'sections.*.components.*.variables.*.type' => 'required|in:text,number,tel,email,url,password,checkbox,radio,date,time,datetime-local,month,week,color,resource,datatable,textarea,select,datasource,action,page,link,upload_file,action_button',
            'sections.*.components.*.variables.*.name' => 'required|string|max:255',
            'sections.*.components.*.variables.*.default' => 'nullable',
            'sections.*.components.*.content' => 'nullable|array',
            'sections.*.components.*.content_id' => 'sometimes|required|integer|exists:component_section,id',
        ];
    }
}
