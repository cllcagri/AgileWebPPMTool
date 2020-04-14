import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addProjectTask} from "../../../actions/backlogActions";
import classnames from "classnames";


class AddProjectTask extends React.Component {

    constructor(props){
        super(props);
        const id = this.props.match.params.id;

        this.state = {
            summary :"",
            acceptanceCriteria : "",
            status: "",
            priority:0,
            dueDate: "",
            projectIdentifier: id,
            errors:{}
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const newProjectTask = {
            summary: this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            status: this.state.status,
            priority: this.state.priority,
            dueDate: this.state.dueDate,
            projectIdentifier: this.state.projectIdentifier
        };

        console.log(newProjectTask);
        this.props.addProjectTask(this.state.projectIdentifier,newProjectTask, this.props.history);
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps){
            this.setState({ errors: nextProps.errors});
        }
    }

    render() {
        const id = this.props.match.params.id;
        const errors = this.state.errors;

        return (
            <div>
                <div className="add-PBI">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h4 className="display-5 mt-4">Add or Update Project Task </h4>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input type="text" className={classnames("form-control form-control-lg ",{
                                            "is-invalid": errors.summary
                                        })} name="summary" placeholder="Project Task summary"
                                               value={this.state.summary} onChange={(e) => this.handleChange(e)}/>
                                        <h5 style={{color:"#ff6347"}}>{errors.summary}</h5>
                                    </div>
                                    <div className="form-group">
                                        <textarea className={classnames("form-control form-control-lg ",{
                                            "is-invalid": errors.acceptanceCriteria})}
                                                  placeholder="Acceptance Criteria"
                                                  name="acceptanceCriteria"
                                                  value={this.state.acceptanceCriteria} onChange={(e) => this.handleChange(e)}/>
                                        <h5 style={{color:"#ff6347"}}>{errors.acceptanceCriteria}</h5>
                                    </div>
                                    <h6>Due Date</h6>
                                    <div className="form-group">
                                        <input type="date" className={classnames("form-control form-control-lg ",{
                                            "is-invalid": errors.dueDate})} name="dueDate"
                                               value={this.state.dueDate}  onChange={(e) => this.handleChange(e)}/>
                                        <h5 style={{color:"#ff6347"}}>{errors.dueDate}</h5>
                                    </div>
                                    <div className="form-group">
                                        <select className={classnames("form-control form-control-lg ",{
                                            "is-invalid": errors.priority})} name="priority"
                                                value={this.state.priority}  onChange={(e) => this.handleChange(e)}>
                                            <option value={0}>Select Priority</option>
                                            <option value={1}>High</option>
                                            <option value={2}>Medium</option>
                                            <option value={3}>Low</option>
                                        </select>
                                        <h5 style={{color:"#ff6347"}}>{errors.priority}</h5>
                                    </div>

                                    <div className="form-group">
                                        <select className={classnames("form-control form-control-lg ",{
                                            "is-invalid": errors.status})}
                                                name="status"
                                                value={this.state.status} onChange={(e) => this.handleChange(e)}>
                                            <option value="">Select Status</option>
                                            <option value="TO_DO">TO DO</option>
                                            <option value="IN_PROGRESS">IN PROGRESS</option>
                                            <option value="DONE">DONE</option>
                                        </select>
                                        <h5 style={{color:"#ff6347"}}>{errors.status}</h5>
                                    </div>

                                    <input type="submit" className="btn btn-lg btn-info btn-block mt-4"/>
                                </form>
                                <Link to={`/projectBoard/${id}`} className="btn btn-light mt-4">
                                    Back to Project Board
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddProjectTask.propTypes = {
    addProjectTask: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps =  state =>({
    errors: state.errors
});


export  default connect(mapStateToProps,{addProjectTask})(AddProjectTask);