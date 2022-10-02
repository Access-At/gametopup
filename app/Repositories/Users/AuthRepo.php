<?php

namespace App\Repositories\Users;

class AuthRepo
{
  public function createRegister($params){
    $validator = $params->validated();
    return create($validator);
  }
}
