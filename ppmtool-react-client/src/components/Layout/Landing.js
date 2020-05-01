import React from "react";
import {Link} from "react-router-dom";
import Register from "../UserManagement/Register";
import Login from "../UserManagement/Login";
import '../../App.css';


class Landing extends React.Component {
    render() {
        return (
            <div className="landing dash-component">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container" style={{height:"665px"}}>
                        <div className="row">
                            <div className="col-md-12 text-center" style={{color:"white"}}>
                                <h1 className="display-4 mb-4 mt-5">DiamonDash Kanban Tool</h1>
                                <p className="lead">
                                    Create your account to join active projects or start you own
                                </p>
                                <hr/>
                                <Link to="/login" className="btn btn-lg btn-primary mr-2">
                                    Login
                                </Link>
                                <Link to="/register" className="btn btn-lg btn-secondary mr-2">
                                    Register
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