<?php

namespace App\Http\Controllers\Dashboard\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardUserController extends Controller
{
    public function dashboardUser()
    {
        return Inertia::render('Dashboard/User/DashboardUser');
    }
}
