import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "./components/Menu";
import { Link } from 'react-router-dom';


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
                    <div className="container" key={key}>
                        <div className=" d-flex justify-content-center">
                            <div className="row col-md-6 col-sm-6  ">
                                <div className="col-12  py-2">
                                    <div className="card ">
                                        <div className="card-header">
                                            <strong>ID:{pessoa.id} - {pessoa.nome}</strong>
                                            <hr></hr>
                                            <p>Curso: {pessoa.curso}</p>
                                            <p>Email: {pessoa.email}</p>
                                            <p>Telefone: {pessoa.telefone}</p>
                                            <div className="m-2 d-flex justify-content-between">
                                                <Link to={{ pathname: `/about/${pessoa.id}` }} className="btn btn-success btn-sm m-2">EDITAR</Link>
                                                <Link to={{ pathname: `/show/${pessoa.id}` }} className="btn btn-info btn-sm m-2">Ler MaIs</Link>
                                                <Link to={{ pathname: `/delete/${pessoa.id}` }} className="btn btn-danger btn-sm m-2">Deletar</Link>
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