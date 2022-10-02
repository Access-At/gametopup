<?php

namespace App\Http\Controllers\Homepage;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class PriceController extends Controller
{
  // todo

  public function price()
  {
    return Inertia::render('Price');
  }
}
