import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import Menu from "./components/Menu";
export default function Show() {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://reactjs-front.com/BackEnd-Laravel/public/api/find/${id}`)
            .then((resultadoAPI) => {
                reset(resultadoAPI.data)
                console.log('Dado Encontrado', resultadoAPI)
            })

            .catch(() => {
                console.log("API NAO ESTA A RETORNAR NADA PUTO!")
            })

    }, []);

    return (
        <>
            <Menu />
            <div className="container ">
                <div className="container">
                    <div className=" d-flex justify-content-center">
                        <div className="row col-md-6 col-sm-6 py-4 ">
                            <div className="col-12 ">
                                <div className="card ">
                                    <div className="card-header">
                                        <strong>Criar dados</strong><Link to={'/'} className="btn btn-info btn-sm float-end">Voltar</Link>
                                        <hr></hr>
                                        <div className="input-group mb-3">
                                            <input type="hidden" {...register("id", { required: true })} className="form-control" disabled />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1">Nome</span>
                                            <input type="text" {...register("nome", { required: true })} className="form-control" disabled />
                                        </div>
                                        <span className="text-danger">
                                            {errors.nome?.type === 'required' && <p role="alert">Nome e obrigatorio</p>}
                                        </span>

                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1">Curso</span>
                                            <input type="text" {...register("curso", { required: true })} className="form-control" disabled />
                                        </div>
                                        <span className="text-danger">
                                            {errors.curso?.type === 'required' && <p role="alert">Curso e obtigatorio</p>}
                                        </span>

                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1">Email</span>
                                            <input type="text" {...register("email", { required: true })} className="form-control" disabled />
                                        </div>
                                        <span className="text-danger">
                                            {errors.email?.type === 'required' && <p role="alert">O email e obrigatorio</p>}
                                        </span>

                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1">Phone</span>
                                            <input type="text"
                                                {...register("telefone", { required: "Etelefone Address is required" })}
                                                aria-invalid={errors.telefone ? "true" : "false"}

                                                className="form-control" disabled />
                                        </div>
                                        <span className="text-danger">
                                            {errors.telefone?.type === 'required' && <p role="alert">O Campo Telefone e de carrater obrigatorio</p>}
                                        </span>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}