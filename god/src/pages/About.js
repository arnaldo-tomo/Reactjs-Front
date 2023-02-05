import { Component } from "react";
import Menu from "./components/Menu";
class About extends Component {
    render() {
        return (
            <>
                <Menu />
                <div className="container">
                    <div className=" d-flex justify-content-center">
                        <div className="row col-md-6 col-sm-6 py-4 ">
                            <div className="col-12 ">
                                <div className="card ">
                                    <div className="card-header">
                                        <strong>Consumindo APi</strong>
                                        <hr></hr>
                                        <p>#2- Nessa vídeo aula daremos continuidade criando os componentes da tela de Login e criaremos as funções responsáveis pelo login utilizando Axios e Redux.
                                        </p>

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

export default About;