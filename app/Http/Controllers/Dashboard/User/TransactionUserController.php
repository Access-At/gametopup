<?php

namespace App\Http\Controllers\Dashboard\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionUserController extends Controller
{
    public function transactionUser()
    {

        return Inertia::render('Dashboard/User/TransactionUser');
    }
}
