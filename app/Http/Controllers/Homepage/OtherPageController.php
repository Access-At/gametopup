<?php

namespace App\Http\Controllers\Homepage;

use Inertia\Inertia;
use App\Models\MenuPageModel;
use App\Http\Controllers\Controller;

class OtherPageController extends Controller
{
  //todo multiple dinamis page in otherpage
  public function OtherPage()
  {
    $menuPage = MenuPageModel::get();
    return Inertia::render('Other', compact($menuPage));
  }
}
