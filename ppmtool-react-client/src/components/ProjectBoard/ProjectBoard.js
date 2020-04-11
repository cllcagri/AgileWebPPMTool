import React from "react";
import {Link} from "react-router-dom";

class ProjectBoard extends React.Component {
    render() {
        const styleTodo = {
            backgroundColor: "#FF8166"
        };
        const styleInProgress = {
            backgroundColor: "#FF5733"
        };
        const styleDone = {
            backgroundColor: "#D5492B"
        };

        debugger;
        const id = this.props.match.params.id;
        return (
                <div className="container">
                    <Link to={`/addProjectTask/${id}`} className="btn btn-lg btn-info" style={{marginTop:"25px"}}>
                        Create Project Task
                    </Link>
                    <br/>
                    <hr/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card text-center mb-2">
                                    <div className="card-header text-white" style={styleTodo}>
                                        <h3>TO DO</h3>
                                    </div>
                                </div>

                                <div className="card mb-1 bg-light">

                                    <div className="card-header text-primary">
                                        ID: projectSequence -- Priority: priorityString
                                    </div>
                                    <div className="card-body bg-light">
                                        <h5 className="card-title">project_task.summary</h5>
                                        <p className="card-text text-truncate ">
                                            project_task.acceptanceCriteria
                                        </p>
                                        <a href="#" className="btn btn-lg btn-info">
                                            View / Update
                                        </a>

                                        <button className="btn btn-danger ml-4">
                                            Delete
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div className="card text-center mb-2">
                                    <div className="card-header text-white" style={styleInProgress}>
                                        <h3>In Progress</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card text-center mb-2">
                                    <div className="card-header text-white" style={styleDone}>
                                        <h3>Done</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}


export default  ProjectBoard;
