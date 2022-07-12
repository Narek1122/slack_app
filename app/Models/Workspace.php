<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workspace extends Model
{
    use HasFactory;

    protected $fillable = ['userId', 'name', 'slug'];

     /**
     * Get the user that owns the workspace.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
