<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuPageModel extends Model
{
    use HasFactory;

    protected $table = 'menu_page';
    protected $guarded = ['id'];
}
