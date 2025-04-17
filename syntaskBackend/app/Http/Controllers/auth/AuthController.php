<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed'
        ]);

        $user = new User();

        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        
        $user->save();

        $token = $user->createToken($request->name);

        return response()->json([
            'status'=>true,
            'message'=>'User registered successfully',
            'token'=>$token->plainTextToken
        ],200);
    }
    public function login(Request $request) {
        $request->validate([
            'email' => 'required|email|exists:users',
            'password' => 'required'
        ]);

        $user = User::where('email',$request->email)->first();

        if(!$user || !Hash::check($request->password,$user->password)){
            return response()->json([
                'status'=>false,
                'message'=>'Invalid credentials'
            ],404);
        }

        $token = $user->createToken($user->name);

        return response()->json([
            'status'=>true,
            'message'=>'Login successful',
            'user'=>$user,
            'token'=>$token->plainTextToken
        ],200);
    }
    public function logout(Request $request) {
        $request->user()->tokens()->delete();

        return response()->json([
            'status'=>true,
            'message'=>'Logout successful'
        ]);
    }
}
