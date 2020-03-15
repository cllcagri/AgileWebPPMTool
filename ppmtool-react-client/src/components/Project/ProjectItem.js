import React from "react";

const projectStyle = {
    color:"#343a40",
    fontStyle: "normal",
    fontWeight: "bold"
};

const orderList ={
    textAlign: "center"
};

class ProjectItem extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto">REACT</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                            <h3>Spring / React Project</h3>
                            <p>Project to create a Board with Spring Boot and React</p>
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">
                                <a href="#">
                                    <li className="list-group-item board" style={orderList}>
                                        <i style={projectStyle}>Project Board </i>
                                    </li>
                                </a>
                                <a href="#">
                                    <li className="list-group-item update" style={orderList}>
                                        <i style={projectStyle}>Update Project Info</i>
                                    </li>
                                </a>
                                <a href="">
                                    <li className="list-group-item delete" style={orderList}>
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

export default ProjectItem;