<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class MainController extends Controller
{
    public function getUser(){
        return response()->json(User::all());
    }

    public function saveEmp(Request $request){
        return ($this->userExist($request->input('email'))) ? response()->json(User::create($request->all())) : response()->json(0);
    }

    public function userExist($email){
        return User::where('email',$email)->first() == null;
    }

    public function updateUser(Request $request){
        $user = User::where('email',$request->input('email'))->first();

        if(is_null($user))
            return response()->json(0);
        else
            return response()->json($user->update($request->all()));
    }

    public function delUser(Request $request){
        $user = User::where('email',$request->input('email'))->first();

        if(is_null($user))
            return response()->json(0);
        else
            return response()->json($user->delete());
    }
}
