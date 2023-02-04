<?php

namespace App\Http\Controllers;

use App\Models\student;
use Illuminate\Http\Request;

class ControllerStudent extends Controller
{
    public function salvar(Request $request)
    {
        $dado = new student;
        $dado->nome = $request->input('nome');
        $dado->curso = $request->input('curso');
        $dado->email = $request->input('email');
        $dado->telefone = $request->input('telefone');
        $dado->save();

        return  response()->json([
            'status' => 200,
            'message' => 'Estudante Salvo Com Sucessos',
        ]);
    }

    public function getStude()
    {
        $student = student::all();
        return  response()->json([
            'status' => 200,
            ' student ' => $student,
        ]);
    }
}
