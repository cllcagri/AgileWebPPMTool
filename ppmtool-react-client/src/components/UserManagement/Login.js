import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import {loginUser} from "../../actions/securityActions";

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            errors: {}
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const newLogin = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.loginUser(newLogin);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.security.validToken) {
            this.props.history.push("/dashboard");
        }

        if (nextProps) {
            this.setState({errors: nextProps.errors});
        }
    }

    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.history.push("/dashboard");
        }
    }

    render() {
        const errors = this.state.errors;

        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-5 text-center">Log In</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="email" className={classnames("form-control form-control-lg ", {
                                        "is-invalid": errors.username
                                    })}
                                           placeholder="Email Address" name="username"
                                           onChange={(e) => this.handleChange(e)}
                                           value={this.state.username}/>
                                    <h5 style={{color: "#ff6347"}}>{errors.username}</h5>

                                </div>
                                <div className="form-group">
                                    <input type="password" className={classnames("form-control form-control-lg ", {
                                        "is-invalid": errors.password
                                    })}
                                           placeholder="Password" name="password"
                                           onChange={(e) => this.handleChange(e)}
                                           value={this.state.password}/>
                                    <h5 style={{color: "#ff6347"}}>{errors.password}</h5>

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


Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    security: state.security,
    errors: state.errors
});

export default connect(mapStateToProps, {loginUser})(Login);