import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createProject} from "../../actions/projectActions";
import classnames from "classnames";

class AddProject extends React.Component {
    constructor(){
        super();

        this.state = {
            projectName: "",
            projectIdentifier: "",
            description: "",
            startDate:"",
            endDate: "",
            errors:{}
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const newProject = {
            projectName: this.state.projectName,
            projectIdentifier: this.state.projectIdentifier,
            description: this.state.description,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        };

        console.log(newProject);
        this.props.createProject(newProject, this.props.history);
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }

    render() {
        const errors = this.state.errors;

        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h2 className="text-dark pt-4">Create - Edit Project Form</h2>
                            <hr/>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="text" className={classnames("form-control form-control-lg ",{
                                        "is-invalid": errors.projectName
                                    })}
                                           placeholder="Project Name" name="projectName" value={this.state.projectName}
                                           onChange={(e) => this.handleChange(e)} />
                                    <h5 style={{color:"#ff6347"}}>{errors.projectName}</h5>
                                </div>
                                <div className="form-group">
                                    <input type="text" className={classnames("form-control form-control-lg ",{
                                        "is-invalid": errors.projectIdentifier
                                    })}
                                           placeholder="Unique Project ID" name="projectIdentifier" value={this.state.projectIdentifier}
                                           onChange={(e) => this.handleChange(e)}/>
                                    <h5 style={{color:"#ff6347"}}>{errors.projectIdentifier}</h5>

                                </div>
                                <div className="form-group">
                                    <textarea className={classnames("form-control form-control-lg ",{
                                        "is-invalid": errors.description
                                    })}
                                              placeholder="Project Description"  name="description" value={this.state.description}
                                              onChange={(e) => this.handleChange(e)} />
                                    <h5 style={{color:"#ff6347"}}>{errors.description}</h5>
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg" name="startDate" value={this.state.startDate}
                                           onChange={(e) => this.handleChange(e)} />
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg" name="endDate" value={this.state.endDate}
                                           onChange={(e) => this.handleChange(e)} />
                                </div>

                                <input type="submit"  style={{background:"#17a2b8",color:"white"}} className="btn btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddProject.propTypes = {
    createProject : PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps,{createProject})(AddProject);
