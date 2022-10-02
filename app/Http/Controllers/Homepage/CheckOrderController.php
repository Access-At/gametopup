<?php

namespace App\Http\Controllers\Homepage;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class CheckOrderController extends Controller
{
  // todo

  public function checkInvoice()
  {
    return Inertia::render('CheckOrder');
  }
}
