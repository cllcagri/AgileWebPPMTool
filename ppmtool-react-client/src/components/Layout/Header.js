import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {logoutUser} from "../../actions/securityActions";
import store from "../../store";



const pngStyle = {
    width: "31px",
    paddingBottom: "4px"
};

class Header extends React.Component {

    logout() {
        store.dispatch(logoutUser());
        window.location.href = "/";
    };

    render() {
        const {validToken, user} = this.props.security;
        const userIsAuthenticated = (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">
                            <i className="fa fa-user-circle mr-1"><span className="ml-1">{user.fullName}</span></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout" onClick={this.logout}>Logout</Link>
                    </li>
                </ul>
            </div>
        );

        const userIsNotAuthenticated = (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                </ul>
            </div>
        );


        let headerLinks;
        if (validToken && user) {
            headerLinks = userIsAuthenticated;
        } else {
            headerLinks = userIsNotAuthenticated;
        }

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/"><img src="diamond1.png" style={pngStyle}/>DiamondDash</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    {headerLinks}
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