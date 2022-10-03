<?php

namespace App\Http\Controllers\Dashboard\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingsUserController extends Controller
{
    public function settingsUser()
    {
        return Inertia::render("Dashboard/User/SettingsUser");
    }
}
