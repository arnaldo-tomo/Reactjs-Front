import { Component } from "react";
import Menu from "./components/Menu";
class About extends Component {
    render() {
        return (
            <>
                <Menu />
                <div className="container">
                    <h1>About</h1>
                </div>
            </>
        );
    }
}

export default About;