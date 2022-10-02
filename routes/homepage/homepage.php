<?php

use App\Http\Controllers\Homepage\{
  AboutStoreController,
  CheckOrderController,
  HomepageController,
  PriceController
};
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomepageController::class, 'homepage'])->name("home");
Route::get('/price', [PriceController::class, 'price'])->name("price");
Route::get('/check-invoice', [CheckOrderController::class, 'checkInvoice'])->name("invoice");
Route::get('/about-store', [AboutStoreController::class, 'aboutStore'])->name("about");
