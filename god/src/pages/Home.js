import { Component } from "react";
import { Link } from 'react-router-dom';
import Menu from "./components/Menu";
import { useForm } from "react-hook-form";
import axios from "axios";


export default function Home() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => axios.post("http://reactjs-front.com/BackEnd-Laravel/public/");
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
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1">Nome</span>
                                                <input type="text" {...register("nome", { required: true })} className="form-control" placeholder="Username" aria-label="Username" />
                                            </div>
                                            <span className="text-danger">
                                                {errors.nome?.type === 'required' && <p role="alert">Nome e obrigatorio</p>}
                                            </span>

                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1">Curso</span>
                                                <input type="text" {...register("curso", { required: true })} className="form-control" placeholder="Username" aria-label="Username" />
                                            </div>
                                            <span className="text-danger">
                                                {errors.curso?.type === 'required' && <p role="alert">Curso e obtigatorio</p>}
                                            </span>

                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1">Email</span>
                                                <input type="text" {...register("email", { required: true })} className="form-control" placeholder="Username" aria-label="Username" />
                                            </div>
                                            <span className="text-danger">
                                                {errors.email?.type === 'required' && <p role="alert">O email e obrigatorio</p>}
                                            </span>

                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1">Phone</span>
                                                <input type="text"
                                                    {...register("telefone", { required: "Etelefone Address is required" })}
                                                    aria-invalid={errors.telefone ? "true" : "false"}

                                                    className="form-control" placeholder="Username" aria-label="Username" />
                                            </div>
                                            <span className="text-danger">
                                                {errors.telefone?.type === 'required' && <p role="alert">O Campo Telefone e de carrater obrigatorio</p>}
                                            </span>


                                            <button type="submit" className="btn btn-success btn-block ">Salvar no laravel</button>
                                        </form>
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

