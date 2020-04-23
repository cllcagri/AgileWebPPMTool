import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {deleteProjectTask} from "../../../actions/backlogActions";
import PropTypes from "prop-types";


class ProjectTask extends React.Component {

    handleDelete = (backlogId, ptId) => {
        this.props.deleteProjectTask(backlogId, ptId);
    };

    render() {
        const {project_task} = this.props;
        return (
            <div className="card mb-1 bg-light">
                <div className="card-header">
                    <b>ID</b>: {project_task.id} || <b>Priority</b>: {project_task.priority}
                </div>
                <div className="card-body bg-light">
                    <h5 className="card-title">{project_task.summary}</h5>
                    <p className="card-text text-truncate ">
                        {project_task.acceptanceCriteria}
                    </p>
                    <Link to={`/updateProjectTask/${project_task.projectIdentifer}/${project_task.projectSequence}`}
                          className="btn btn-light mt-4" style={{backgroundColor: "#afb1b3"}}>
                        View / Update
                    </Link>
                    <button className="btn btn-danger ml-3" style={{marginTop: "8%"}}
                            onClick={this.handleDelete.bind(this, project_task.projectIdentifer, project_task.projectSequence)}>
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

ProjectTask.propTypes = {
    deleteProjectTask: PropTypes.func.isRequired
};

export default connect(null, {deleteProjectTask})(ProjectTask);