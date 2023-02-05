import { Component } from "react";
class welcome extends Component {
    render() {
        return (
            <>
                <div>Pagina Welcome</div>
                <ul>
                    <Link to={'/'} ><li>welcome</li> </Link>
                    <Link to={'About'}><li>About</li> </Link>
                    <a href="About" ><li>Home</li> </a>
                </ul>
            </>


        );
    }
}
export default welcome;