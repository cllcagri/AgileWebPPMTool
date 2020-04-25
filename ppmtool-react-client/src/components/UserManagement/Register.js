import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {createNewUser} from "../../actions/securityActions";
import classnames from "classnames";

class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            fullName: "",
            password: "",
            confirmPassword: "",
            errors: {}
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            fullName: this.state.fullName,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            errors: {}
        };

        this.props.createNewUser(newUser,this.props.history);
        //console.log(newUser);
    }


    render() {
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your Account</p>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Full Name"
                                           name="fullName" required value={this.state.fullName}
                                           onChange={(e) => this.handleChange(e)}/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-lg"
                                           placeholder="Email Address(Username)"
                                           name="username" value={this.state.username}
                                           onChange={(e) => this.handleChange(e)}/>

                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg"
                                           placeholder="Password"
                                           name="password" value={this.state.password}
                                           onChange={(e) => this.handleChange(e)}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg"
                                           placeholder="Confirm Password"
                                           name="confirmPassword" value={this.state.confirmPassword}
                                           onChange={(e) => this.handleChange(e)}/>
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    createNewUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    errors: state.errors
});


export default connect(mapStateToProps, {createNewUser})(Register);