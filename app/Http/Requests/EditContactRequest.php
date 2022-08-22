<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EditContactRequest extends FormRequest
{
    public function rules()
    {
        return [
            'name' => ['required'],
            'email' => ['required', 'email'],
            'address' => ['required'],
            'postal' => ['required'],
            'city' => ['required'],
        ];
    }
}
