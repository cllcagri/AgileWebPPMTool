import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {deleteProject} from "../../actions/projectActions";

const projectStyle = {
    color:"#343a40",
    fontStyle: "normal",
    fontWeight: "bold"
};

const orderList ={
    textAlign: "center"
};

class ProjectItem extends React.Component {

    handleDelete = (id) => {
      this.props.deleteProject(id);
    };

    render() {
        const {project} = this.props;
        return (
            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto">{project.projectIdentifier}</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                            <h3>{project.projectName}</h3>
                            <p>{project.description}</p>
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">
                                <a href="#">
                                    <li className="list-group-item board" style={orderList}>
                                        <i style={projectStyle}>Project Board </i>
                                    </li>
                                </a>
                                <Link to={`/updateProject/${project.projectIdentifier}`}>
                                    <li className="list-group-item update" style={orderList}>
                                        <i style={projectStyle}>Update Project Info</i>
                                    </li>
                                </Link>
                                <a href="">
                                    <li className="list-group-item delete" style={orderList} onClick={this.handleDelete.bind(this, project.projectIdentifier)}>
                                        <i style={projectStyle}><span style={{color:"#ff6347"}}>Delete Project</span></i>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ProjectItem.propTypes = {
   deleteProject: PropTypes.func.isRequired
};


export default connect(null,{deleteProject})(ProjectItem);