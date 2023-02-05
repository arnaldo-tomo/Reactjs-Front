import { Component } from "react";
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>PAGINa HOME</h1>
                <ul>
                    <Link to={'/'} ><li>welcome</li> </Link>
                    <Link to={'About'}><li>About</li> </Link>
                    <a href="About" ><li>Home</li> </a>
                </ul>
            </div>
        );
    }
}

export default Home;