import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "./components/Menu";
export default function Welcome() {

    let [dado, Dados] = useState([]);
    useEffect(() => {

        axios.get("http://reactjs-front.com/BackEnd-Laravel/public/api/todos")

            .then((resultadoAPI) => {
                Dados(resultadoAPI.data)
            })

            .catch(() => {
                console.log("API NAO ESTA A RETORNAR NADA PUTO!")
            })

    }, []);

    return (
        <>
            <Menu />

            {dado.map((pessoa, key) => {
                return (
                    <div className="container">
                        <div className=" d-flex justify-content-center">
                            <div className="row col-md-6 col-sm-6  ">
                                <div className="col-12  py-2">
                                    <div className="card ">
                                        <div className="card-header">
                                            <strong>Consumindo APi</strong>
                                            <hr></hr>
                                            <p>#2- Nessa vídeo aula daremos continuidade criando os componentes da tela de Login e criaremos as funções responsáveis pelo login utilizando Axios e Redux.
                                            </p>
                                            <div className="m-2 d-flex justify-content-between">
                                                <a className="btn btn-success btn-sm m-2">EDITAR</a>
                                                <a className="btn btn-info btn-sm m-2">Ler MaIs</a>
                                                <a className="btn btn-danger btn-sm m-2">Deletar</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}