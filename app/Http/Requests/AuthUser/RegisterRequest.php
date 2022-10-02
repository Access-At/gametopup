<?php

namespace App\Http\Requests\AuthUser;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|min:3',
            'email' => 'required|unique:admin',
            'password' => 'required|min:3',
            'phone_number' => 'nullable|min:1|max:15'
        ];
    }
}
