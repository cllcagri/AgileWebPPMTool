import React from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";
import {connect} from "react-redux";
import {getProjects} from "../actions/projectActions";
import PropTypes from "prop-types";
import '../App.css';

class Dashboard extends React.Component {

    componentDidMount() {
        this.props.getProjects();
    }

    render() {
        const projects = this.props.project.projects;
        const listProjects = projects.map((project) =>
            <ProjectItem key={project.id} project = {project}/>
        );

        return (
                <div className="dash-component">
                    <div className="container" style={{height:"665px"}}>
                        <div className="row">
                            <div className="col-md-12">
                                <br/>
                                <CreateProjectButton />
                                <br/>
                                <hr/>
                                {listProjects}
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

Dashboard.propTypes = {
    project: PropTypes.object.isRequired,
    getProjects: PropTypes.func.isRequired
};

const mapStateToProps = state =>({
  project: state.project
});

export default connect(mapStateToProps, {getProjects})(Dashboard);
