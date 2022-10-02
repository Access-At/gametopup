<?php

namespace App\Http\Controller\Homepage;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class OtherPageController extends Controller{
  //todo multiple dinamis page in otherpage
  //
  //example get data from repo to controller :
  //(new NameRepo)->namefunction(params ? "params" : null )
  public function OtherPage(){
    return Inertia::render(
      'OtherPage'
    );
  }
}
