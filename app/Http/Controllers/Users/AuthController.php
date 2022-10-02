<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthUser\RegisterRequest;
use App\Models\User;


class AuthController extends Controller
{
  public function register(RegisterRequest $request)
  {
    $validate = $request->validated();
    User::create(
      $validate
    );
    return back();
  }
}
