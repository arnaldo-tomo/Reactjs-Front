import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import axios from "axios";

class estudantes extends Component {


    state = {
        student: [],
        loading: true,
    }
    async componentDidMount() {
        const res = await axios.get('http://127.0.0.1:8000/api/todos');
        console.log(res);

        if (res.data.status == 200) {

            this.setState({
                student: res.data.student,
                loading: false,
            });
        }
    }


    render() {
        var student_HtMLTABLE = "";

        if (this.state.loading) {
            student_HtMLTABLE = <tr> <td colSpan="6"> <h2>Loading....</h2>  </td> </tr>
        } else {

            student_HtMLTABLE =
                this.state.student.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.nome}</td>
                            <td>{item.curso}</td>
                            <td>{item.email}</td>
                            <td>{item.telefone}</td>
                            <td>
                                <a className="btn btn-primary btn-sm m-2"><i className="fa fa-edit"></i></a>
                                <a className="btn btn-danger btn-sm m-2"><i className="fa fa-trash"></i></a>
                            </td>
                        </tr>
                    );
                });
        }
        return (
            <div className="container row ">
                <div className="col-md-12 col-sm-6 py-4">

                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-6">
                                    <strong>Lista de estudantes</strong>
                                </div>
                                <Link href="/Home">hjbvhjlh</Link>
                                <div className="col-6">
                                    <Link to={'Home'} className="btn btn-success float-end btn-sm">
                                        <i className="fa fa-plus"></i> Criar Estudante
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <div className="card-body">
                            <table className="table table-striped table-light ">
                                <thead >
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>Curso</th>
                                        <th>Email</th>
                                        <th>Telefone</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <thead>
                                    {student_HtMLTABLE}
                                </thead>
                            </table>
                        </div>
                    </div>

                </div >
            </div >
        );
    }
}

export default estudantes;
