import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

class Home extends Component {

    get() {
        console.log('Clicado');

    }

    //Nomes das variaves dos inutos
    state = {
        nome: '',
        curso: '',
        email: '',
        telefone: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //metodos para salvar do sub,it nos foms

    saveStudent = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://reactjs-front.com/BackEnd-Laravel/public/api/todos', this.state);

        if (res.data.status == 200) {

            console.log(res.data.message);


            //depois de limpar mostra
            this.setState({
                nome: '',
                curso: '',
                email: '',
                telefone: '',
            });
        }
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
                                    <Link to={'/'} className="btn btn-success btn-sm float-end"><i className="fa fa-arrow-left"></i> Back </Link>
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
                                    <input type="text" name="curso" onChange={this.handleInput} value={this.state.curso} className="form-control" placeholder="Curso" aria-describedby="helpId" />
                                </div>
                                <div className="form-group mb-2">
                                    <label for="">Email</label>
                                    <input type="text" name="email" onChange={this.handleInput} value={this.state.email} className="form-control" placeholder="Email" aria-describedby="helpId" />
                                </div>
                                <div className="form-group mb-2">
                                    <label for="">Telefone</label>
                                    <input type="text" name="telefone" onChange={this.handleInput} value={this.state.telefone} className="form-control" placeholder="Telefone" aria-describedby="helpId" />
                                </div>
                                <div className="form-group mb-2">
                                    <button type="submit" className="btn btn-success btn-block btn-rounded "><i className=" fa fa-cloud"></i> Upload</button>
                                </div>

                            </form>
                        </div>

                        <button className="btn btn-primary" onClick={this.get}>CLike so</button>

                    </div>
                </div>

            </div>
        );
    }
}

export default Home;