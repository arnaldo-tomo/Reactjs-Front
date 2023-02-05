import { Component } from "react";
import { Link } from 'react-router-dom';
import Menu from "./components/Menu";


class Home extends Component {
    render() {
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
                                            <label>Nome</label>
                                            <input type={'search'} placeholder="Infome nome " className="form-control"></input>
                                            <label>Desricao</label>
                                            <textarea className="form-control" rows={5}></textarea>
                                            <a className="btn btn-success btn-sm m-2">Salvar</a>
                                            <div className=" d-flex justify-content-between">

                                            </div>
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
}

export default Home;