<?php

use App\Http\Controllers\Dashboard\User\DashboardUserController;
use Illuminate\Routing\Route;

Route::get('/dashboard/user', DashboardUserController::class, "dashboardUser")->name('users.dahsboard');
