<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthUser\RegisterRequest;
use App\Models\User;
use App\Repositories\Users\AuthRepo;
use Illuminate\Support\Facades\Request;

class AuthController extends Controller
{
  public function register()
  {
    // return (new AuthRepo())->createRegister($request);

    // $validate = $request->validated();


    User::create(
      Request::validate([
        // 'fullname' => 'required',
        'username' => 'required|min:3|alpha_dash',
        'email' => 'required',
        'password' => 'required|min:8',
        'phone_number' => 'nullable|min:1|max:15'
      ])
    );

    // User::create($request->validated());
    return back();
  }
}
