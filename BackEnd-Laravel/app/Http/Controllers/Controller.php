<?php

namespace App\Http\Controllers;

use App\Models\student;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function salvar(Request $request)
    {
        $dado = new student;
        $dado->nome = $request->input('nome');
        $dado->curso = $request->input('curso');
        $dado->email = $request->input('email');
        $dado->telefone = $request->input('telefone');
        $dado->save();

        return  response()->json([
            'status', 200,
            'message' => 'estudante salvo com sucessos',
        ]);
    }
}
