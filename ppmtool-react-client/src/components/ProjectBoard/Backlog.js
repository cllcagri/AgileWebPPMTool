import React from "react";
import {Link} from "react-router-dom";
import ProjectTask from "./ProjectTasks/ProjectTask";


class Backlog extends React.Component {
    render() {
        const styleTodo = {
            backgroundColor: "#b8dce2"
        };
        const styleInProgress = {
            backgroundColor: "rgb(96, 160, 171)"
        };
        const styleDone = {
            backgroundColor: "#17a2b8"
        };

        const {project_tasks_prop} = this.props;
        const tasks = project_tasks_prop.map(projectTask =>(
            <ProjectTask key={projectTask.id} project_task={projectTask} />
        ));

        let todoTasks = [];
        let progressTasks = [];
        let doneTasks = [];

        for(let i = 0 ; i < tasks.length ; i++){
            if(tasks[i].props.project_task.status === 'TO_DO'){
                todoTasks.push(tasks[i]);
            }else if(tasks[i].props.project_task.status === 'IN_PROGRESS'){
                progressTasks.push(tasks[i]);
            }else {
                doneTasks.push(tasks[i]);
            }
        }

        return (
            <div className="container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header text-white" style={styleTodo}>
                                    <h3>TO DO</h3>
                                </div>
                            </div>
                            {todoTasks}
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header text-white" style={styleInProgress}>
                                    <h3>In Progress</h3>
                                </div>
                            </div>
                            {progressTasks}
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header text-white" style={styleDone}>
                                    <h3>Done</h3>
                                </div>
                            </div>
                            {doneTasks}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Backlog;