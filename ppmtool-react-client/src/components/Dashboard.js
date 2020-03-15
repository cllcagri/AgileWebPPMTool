import React from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";

class Dashboard extends React.Component {

    render() {
        return (
                <div className="projects">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <br/>
                                <CreateProjectButton />
                                <br/>
                                <hr/>
                                <ProjectItem />
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Dashboard;
