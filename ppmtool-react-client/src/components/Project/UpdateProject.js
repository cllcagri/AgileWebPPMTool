import React from "react";
import {getProject} from "../../actions/projectActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createProject} from "../../actions/projectActions";
import classnames from "classnames";


class UpdateProject extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: "",
            projectName: "",
            projectIdentifier: "",
            description: "",
            startDate:"",
            endDate: "",
            errors: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        //console.log(nextProps.project);
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }

        this.setState({
            id: nextProps.project.id,
            projectName: nextProps.project.projectName,
            projectIdentifier: nextProps.project.projectIdentifier,
            description: nextProps.project.description,
            startDate:nextProps.project.startDate,
            endDate: nextProps.project.endDate
        });
    }


    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getProject(id, this.props.history);
    }

    //changed value catcher
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const updateProject = {
            id: this.state.id,
            projectName: this.state.projectName,
            projectIdentifier: this.state.projectIdentifier,
            description: this.state.description,
            startDate:this.state.startDate,
            endDate: this.state.endDate
        };

        this.props.createProject(updateProject, this.props.history);

    };

    render() {
        const errors = this.state.errors;

        let alertBoxName;
        let alertBoxDesc;
        if(Object.keys(errors).length !== 0){
            if(errors.projectName){
                alertBoxName = <div className="alert alert-danger" role="alert">{errors.projectName}</div>
            }
            if(errors.description){
                alertBoxDesc = <div className="alert alert-danger" role="alert">{errors.description}</div>
            }
        }



        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Update Project Form</h5>
                            <hr/>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="text" className={classnames("form-control form-control-lg ",{
                                        "is-invalid": errors.projectName
                                    })} name="projectName"
                                           placeholder="Project Name" value={this.state.projectName}  onChange={(e) => this.handleChange(e)}/>
                                </div>
                                <div>
                                    {alertBoxName}
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg"
                                           placeholder="Unique Project ID" name="projectIdentifier"
                                           disabled value={this.state.projectIdentifier} onChange={(e) => this.handleChange(e)} />
                                </div>
                                <div className="form-group">
                                    <textarea className={classnames("form-control form-control-lg ",{
                                        "is-invalid": errors.description
                                    })} name="description"
                                        placeholder="Project Description"  value={this.state.description}  onChange={(e) => this.handleChange(e)} />
                                </div>
                                <div>
                                    {alertBoxDesc}
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg" name="start_date" value={this.state.startDate} onChange={(e) => this.handleChange(e)} />
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg" name="end_date" value={this.state.endDate} onChange={(e) => this.handleChange(e)} />
                                </div>

                                <input type="submit" className="btn btn-lg btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

UpdateProject.propTypes = {
    getProject : PropTypes.func.isRequired,
    createProject : PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    project: state.project.project,
    errors: state.errors
});


export default  connect(mapStateToProps, {getProject, createProject})(UpdateProject);