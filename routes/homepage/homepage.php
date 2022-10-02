<?php

use App\Http\Controllers\Homepage\{
  AboutStoreController,
  CheckOrderController,
  HomepageController,
  PriceController
};
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomepageController::class, 'homepage']);
Route::get('/price', [PriceController::class, 'price']);
Route::get('/check-invoice', [CheckOrderController::class, 'checkInvoice']);
Route::get('/about-store', [AboutStoreController::class, 'aboutStore']);
