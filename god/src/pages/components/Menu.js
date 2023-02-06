import { Component } from "react";
import About from './../About';
import { Link } from "react-router-dom";
class Menu extends Component {

    render() {
        const nab = "{ Crud ReactJS }"
        const login = "Add new Post "
        return (
            <div className="container shadow-2">
                <nav className="navbar" className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="btn btn-primary btn-sm" href="/">{nab}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse float-end navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="/Home">Home</a>
                                <Link className="nav-link active" aria-current="page" to={'/about'} >About</Link>

                            </div>
                        </div>
                        <a className="btn btn-success btn-sm d-felx justify-content-end" href="/Home">{login}</a>
                    </div>
                </nav>
            </div >
        );
    }
}

export default Menu;