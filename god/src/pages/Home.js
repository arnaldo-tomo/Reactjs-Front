import { Component } from "react";
import { Link } from 'react-router-dom';
import Menu from "./components/Menu";


class Home extends Component {
    render() {
        return (
            <>
                <Menu />
            </>
        );
    }
}

export default Home;