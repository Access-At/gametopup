<?php

namespace App\Http\Controllers\Users;

use App\Models\User;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Repositories\Users\AuthRepo;
use App\Http\Requests\AuthUser\LoginRequest;
use App\Http\Requests\AuthUser\RegisterRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
  public function register(RegisterRequest $request)
  {
    return (new AuthRepo)->createRegister($request);
  }

  public function login(LoginRequest $request)
  {
    (new AuthRepo)->getLogin($request);
    return redirect()->route('users.dashboard');
  }
  public function logout(Request $request)
  {
    (new AuthRepo)->sessionLogout($request);
    return redirect()->route('home');
  }
}
