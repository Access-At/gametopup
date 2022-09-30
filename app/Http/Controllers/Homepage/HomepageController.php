<?php

namespace App\Http\Controllers\Homepage;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class HomepageController extends Controller
{
  // todos
  public function homepage()
  {
    return Inertia::render('Home');
  }
}
