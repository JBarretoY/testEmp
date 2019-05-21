<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    protected $table = 'reports';
    protected $fillable = [
        'user_id',
        'date',
        'description'
    ];

    public function user(){
        return $this->belongsTo('App\User');
    }
}
