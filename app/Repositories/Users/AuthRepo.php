<?php

namespace App\Repositories\Users;

use App\Models\User;
use Illuminate\Support\Str;

// !FIX: validation in here

class AuthRepo
{
  public function createRegister($params)
  {
    $validator = $params->validated();
    User::create($validator);
  }

  public function getLogin($params)
  {
    $params->authenticate();
    $user = User::find(auth()->user()->id);
    $user->token_random = Str::random(50);
    $user->save();

    $params->session()->regenerate();
  }
  public function sessionLogout($params)
  {
    $user = User::find(auth()->user()->id);
    $user->token_random = NULL;
    $user->save();
    auth()->guard('web')->logout();

    $params->session()->invalidate();

    $params->session()->regenerateToken();
  }
}
