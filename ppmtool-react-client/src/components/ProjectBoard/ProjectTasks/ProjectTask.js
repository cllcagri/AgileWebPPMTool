import React from "react";
import {Link} from "react-router-dom";

class ProjectTask extends React.Component {
    render() {
        const {project_task} = this.props;
        return (
                <div className="card mb-1 bg-light">
                    <div className="card-header">
                        <b>ID</b>: {project_task.id}  ||  <b>Priority</b>: {project_task.priority}
                    </div>
                    <div className="card-body bg-light">
                        <h5 className="card-title">{project_task.summary}</h5>
                        <p className="card-text text-truncate ">
                            {project_task.acceptanceCriteria}
                        </p>
                        <Link to={`/dashboard`} className="btn btn-light mt-4" style={{backgroundColor : "#afb1b3"}}>
                            View / Update
                        </Link>
                        <Link to={`/dashboard`} className="btn btn-light mt-4 ml-2" style={{backgroundColor : "#e66b77"}}>
                            Delete
                        </Link>
                    </div>
                </div>
        );
    }
}


export default ProjectTask;