import React from "react";
import {getProject} from "../../actions/projectActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createProject} from "../../actions/projectActions";


class UpdateProject extends React.Component {
    constructor(){
        super();

        this.state = {
            id: "",
            projectName: "",
            projectIdentifier: "",
            description: "",
            startDate:"",
            endDate: "",
        }
    }

    componentWillReceiveProps(nextProps) {
        //console.log(nextProps.project);
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
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Update Project form</h5>
                            <hr/>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg " name="projectName"
                                           placeholder="Project Name" value={this.state.projectName}  onChange={(e) => this.handleChange(e)}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg"
                                           placeholder="Unique Project ID" name="projectIdentifier"
                                           disabled value={this.state.projectIdentifier} onChange={(e) => this.handleChange(e)} />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" name="description"
                                              placeholder="Project Description"  value={this.state.description}  onChange={(e) => this.handleChange(e)} />
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg" name="start_date" value={this.state.startDate} onChange={(e) => this.handleChange(e)} />
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg" name="end_date" value={this.state.endDate} onChange={(e) => this.handleChange(e)} />
                                </div>

                                <input type="submit" className="btn btn-primary btn-block mt-4"/>
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
    project: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    project: state.project.project
});


export default  connect(mapStateToProps, {getProject, createProject})(UpdateProject);