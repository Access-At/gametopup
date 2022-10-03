<?php

namespace App\Repositories\Users;

use App\Models\User;

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
    $validate = $params->validated();
    return User::where('email', $validate['email'])->first();
  }
}
