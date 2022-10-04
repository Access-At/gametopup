<?php

use App\Http\Controllers\Dashboard\User\{
  DashboardUserController,
  SettingsUserController,
  TransactionUserController
};
use App\Http\Controllers\Users\AuthController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->group(function () {
  Route::post('/logout', [AuthController::class, 'logout'])->name("logout");
  Route::get('/dashboard/user', [DashboardUserController::class, 'dashboardUser'])->name("users.dashboard");
  Route::get('/dashboard/user/transaction', [TransactionUserController::class, 'transactionUser'])->name("users.transaction");
  Route::get('/dashboard/user/settings', [SettingsUserController::class, 'settingsUser'])->name("users.settings");
});
