<?php

namespace App\Http\Controllers\Homepage;

use App\Http\Controllers\Controller;

class HomepageController extends Controller
{
  // todos
  public function homepage()
  {
    return Inertia::render('Home');
  }
}
