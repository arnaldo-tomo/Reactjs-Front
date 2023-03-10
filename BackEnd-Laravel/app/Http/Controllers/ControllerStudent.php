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
        return  response()->json($student);
    }

    public function find($id)
    {
        $student = student::find($id);
        return  response()->json($student);
    }

    public function delete($id)
    {
        $student = student::find($id);
        $student->delete();
        return  response()->json($student);
    }

    public function update(Request $request)
    {
        $dado = student::find($request->id);
        $dado->nome = $request->nome;
        $dado->curso = $request->curso;
        $dado->email = $request->email;
        $dado->telefone = $request->telefone;
        $dado->update();

        return  response()->json([
            'status' => 200,
            'message' => 'Estudante Salvo Com Sucessos',
        ]);
    }
}
