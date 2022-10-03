<?php

use App\Http\Controllers\Homepage\{
  AboutStoreController,
  CheckOrderController,
  HomepageController,
  PriceController,
  OtherPageController
};
use Illuminate\Support\Facades\Route;

Route::get('/', [HomepageController::class, 'homepage'])->name("home");
Route::get('/price', [PriceController::class, 'price'])->name("price");
Route::get('/check-invoice', [CheckOrderController::class, 'checkInvoice'])->name("invoice");
Route::get('/about-store', [AboutStoreController::class, 'aboutStore'])->name("about");
// Route::get('/other', [OtherPageController::class, 'OtherPage'])->name("other");
