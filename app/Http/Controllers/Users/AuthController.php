<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthUser\RegisterRequest;
use App\Repositories\Users\AuthRepo;

class AuthController extends Controller
{
  public function register(RegisterRequest $request)
  {
    return (new AuthRepo)->createRegister($request);
  }
}
