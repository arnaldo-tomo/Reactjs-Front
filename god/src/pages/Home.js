import { Component } from "react";
import { Link } from 'react-router-dom';
import Menu from "./components/Menu";


class Home extends Component {
    render() {
        return (
            <>
                <Menu />
                <div className="container ">
                    <h1>Home</h1>
                </div>
            </>
        );
    }
}

export default Home;