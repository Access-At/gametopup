<?php

use App\Http\Controllers\Dashboard\User\{
  DashboardUserController,
  SettingsUserController,
  TransactionUserController
};
use Illuminate\Support\Facades\Route;

Route::get('/dashboard/user', [DashboardUserController::class, 'dashboardUser'])->name("users.dashboard");
Route::get('/dashboard/user/transaction', [TransactionUserController::class, 'transactionUser'])->name("users.transaction");
Route::get('/dashboard/user/settings', [SettingsUserController::class, 'settingsUser'])->name("users.settings");
