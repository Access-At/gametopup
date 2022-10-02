<?php

namespace App\Http\Controllers\Homepage;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AboutStoreController extends Controller
{
  // todos
  public function aboutStore()
  {
    return Inertia::render('AboutStore');
  }
}
