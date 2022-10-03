<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthUser\LoginRequest;
use App\Http\Requests\AuthUser\RegisterRequest;
use App\Models\User;
use App\Repositories\Users\AuthRepo;

class AuthController extends Controller
{
  public function register(RegisterRequest $request)
  {
    return (new AuthRepo)->createRegister($request);
  }

  public function login(LoginRequest $request)
  {
    (new AuthRepo)->getLogin($request);
    return to_route('users.dashboard');
  }
}
