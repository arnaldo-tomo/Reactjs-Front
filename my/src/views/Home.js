import React, { Component } from "react";
import axios from 'axios';

class Home extends Component {
    state = {
        nome: '',
        curso: '',
        email: '',
        telefone: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.nome]: e.target.value
        });
    }

    saveStudent = async (e) => {
        e.preventDefault();
        const res = await axios.post('api/salvar', this.state);
    }
    render() {

        return (
            <div className="container row py-4">
                <div className="col-md-12 col-sm-6">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-6">
                                    <strong> ReacJS Front</strong>
                                </div>
                                <div className="col-6">
                                    <a className="btn btn-success btn-sm float-end"><i className="fa fa-plus"></i> Add New Student </a>
                                </div>
                            </div>
                        </div>

                        <div className="card-body">
                            <form onSubmit={this.saveStudent}>
                                <div className="form-group mb-2">
                                    <label for="">Nome</label>
                                    <input type="text" name="nome" onChange={this.handleInput} value={this.state.nome} className="form-control" placeholder="Email" aria-describedby="helpId" />
                                </div>
                                <div className="form-group mb-2">
                                    <label for="">Curso</label>
                                    <input type="text" name="curso" onChange={this.handleInput} value={this.state.curso} id="" className="form-control" placeholder="Curso" aria-describedby="helpId" />
                                </div>
                                <div className="form-group mb-2">
                                    <label for="">Email</label>
                                    <input type="email" name="email" onChange={this.handleInput} value={this.state.email} id="" className="form-control" placeholder="Email" aria-describedby="helpId" />
                                </div>
                                <div className="form-group mb-2">
                                    <label for="">Telefone</label>
                                    <input type="number" name="curso" onChange={this.handleInput} value={this.state.telefone} id="telefone" className="form-control" placeholder="Telefone" aria-describedby="helpId" />
                                </div>
                                <div className="form-group mb-2">
                                    <a type="submit" className="btn btn-success btn-block btn-rounded "><i className=" fa fa-cloud"></i> Upload</a>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Home;