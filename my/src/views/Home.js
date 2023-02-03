import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div className="container row py-4">
                <div className="col-md-12 col-sm-6">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-6">
                                    <strong> ReacJS Front</strong>
                                </div>
                                <div className="col-6">
                                    <a className="btn btn-success btn-sm float-end"><i className="fa fa-plus"></i> Add New Student </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Home;