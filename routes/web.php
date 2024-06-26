<?php

use App\Http\Controllers\Homepage\{
  AboutStoreController,
  CheckOrderController,
  HomepageController,
  PriceController
};
use App\Http\Controllers\Users\AuthController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// TODO: Make routes for other page[FAQ], other page[Payment]
// TODO: Make routes for TopupGame Detail
// TODO: Make routes on authentication for dashboard User, Transaction User, Settings User, About Store User

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     // return Inertia::render('Home', [
//     //     'canLogin' => Route::has('login'),
//     //     'canRegister' => Route::has('register'),
//     //     'laravelVersion' => Application::VERSION,
//     //     'phpVersion' => PHP_VERSION,
//     // ]);
// });

//route move to routes->homepage->homepage.php
require 'homepage/homepage.php';
require "dashboard/dashboardUser.php";

Route::post('/register/user', [AuthController::class, 'register'])->name('users.register');
Route::post('/login/user', [AuthController::class, 'login'])->name('users.login');
// Route::get('/dashboard', function () {
//   return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
