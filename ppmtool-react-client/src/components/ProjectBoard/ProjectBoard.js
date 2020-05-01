import React from "react";
import Backlog from "./Backlog";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getBacklog} from "../../actions/backlogActions";


class ProjectBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errors:{}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getBacklog(id);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }

    render() {
        const id = this.props.match.params.id;
        const {project_tasks}  = this.props.backlog;
        const {errors} = this.state;
        let BoardContent;

        let BoardAlgorithm = (errors, project_tasks) => {
            if(project_tasks.length < 1){
                debugger;
                if(errors.message){
                    return (
                        <div className="alert alert-danger text-center" role="alert">{errors.message}</div>
                    );
                }else if(errors.projectIdentifier){
                    return (
                        <div className="alert alert-danger text-center" role="alert">{errors.projectIdentifier}</div>
                    );
                }
                else{
                    return(
                        <div>
                            <Link to={`/addProjectTask/${id}`} className="btn btn-lg btn-info" style={{marginTop:"25px", marginLeft:"12.4%"}}>
                                Create Project Task
                            </Link>
                            <br/>
                            <hr/>
                            <div className="alert alert-info text-center" role="alert">No Project Task In Your Board</div>
                        </div>
                    );
                }
            }else{
                return  (
                    <div>
                        <Link to={`/addProjectTask/${id}`} className="btn btn-lg btn-info" style={{marginTop:"25px", marginLeft:"12.4%"}}>
                            Create Project Task
                        </Link>
                        <br/>
                        <hr/>
                        <Backlog  project_tasks_prop = {project_tasks} />
                    </div>
            );
            }
        };

        BoardContent = BoardAlgorithm(errors,project_tasks);


        return (
                <div>
                    {BoardContent}
                </div>
        );
    }
}

ProjectBoard.propTypes = {
    backlog: PropTypes.object.isRequired,
    getBacklog: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};


const mapStateToProject = state => ({
    backlog: state.backlog,
    errors: state.errors
});

export default  connect(mapStateToProject, {getBacklog})(ProjectBoard);
