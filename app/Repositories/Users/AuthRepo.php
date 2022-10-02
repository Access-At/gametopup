<?php

namespace App\Repositories\Users;

use App\Models\User;

class AuthRepo
{
  public function createRegister($params)
  {
    return User::create($validator);
  }
}
