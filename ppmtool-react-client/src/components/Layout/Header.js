import React from "react";
import {Link} from "react-router-dom";
import Dashboard from "../Dashboard";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {logoutUser} from "../../actions/securityActions";


const pngStyle = {
    width: "31px",
    paddingBottom: "4px"
};

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#"><img src="diamond1.png" style={pngStyle}/>DiamondDash</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    security: state.security
});

export default connect(mapStateToProps, {logoutUser})(Header);