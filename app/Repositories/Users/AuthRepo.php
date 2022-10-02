<?php

namespace App\Repositories\Users;

use App\Models\User;

// FIX: validation in here

class AuthRepo
{
  public function createRegister($params)
  {
    return User::create($validator);
  }
}
