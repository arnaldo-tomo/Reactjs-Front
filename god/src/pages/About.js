import { Component } from "react";
import { Link } from 'react-router-dom';
class About extends Component {
    render() {
        return (
            <div>
                <h1>Estas na pagina About</h1>
                <ul>
                    <Link to={'welcome'} ><li>welcome</li> </Link>
                    <Link to={'/'}><li>About</li> </Link>
                    <a href="About" ><li>Home</li> </a>
                </ul>
            </div>
        );
    }
}

export default About;