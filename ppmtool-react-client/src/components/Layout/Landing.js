import React from "react";
import {Link} from "react-router-dom";
import Register from "../UserManagement/Register";
import Login from "../UserManagement/Login";

class Landing extends React.Component {
    render() {
        return (
            <div className="landing">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-4 mb-4 mt-5">DiamonDash Kanban Tool</h1>
                                <p className="lead">
                                    Create your account to join active projects or start you own
                                </p>
                                <hr/>
                                <Link to={Login} className="btn btn-lg btn-primary mr-2">
                                    Sign Up
                                </Link>
                                <Link to={Register} className="btn btn-lg btn-secondary mr-2">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Landing;