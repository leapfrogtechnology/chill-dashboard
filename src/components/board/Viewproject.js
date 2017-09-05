import React, { Component } from "react";

import ProjectList from "./Projectlist";
import logoCheck from "../../../public/images/logocheck.png";
import profilepictures from "../../../public/images/chill.png";
import * as projectServices from "../../services/projectServices";

class Viewproject extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }
  async componentDidMount() {
    this.fetchProjects();
  }

  async fetchProjects() {
    console.log("test");
    console.log("test2");
    try {
      const projects = await projectServices.fetch();

      this.setState({
        projects: projects.data
      });
    } catch (err) {
      // TODO: Show error messages
    }
  }
  // {this.state.projects[0] && this.state.projects[0].id}
  render() {
    return (
      <div className="row yellow">
        im from VIEWPROJECT
        {console.log(this.state.projects)}
        <ProjectList projectlist={this.state.projects} />
        {/* <h2> {this.state.projects[0] && this.state.projects[0].name}</h2> */}
        {/* console.log({projects.map})
         <div className="container">
          <div className="showservice">
            <ul>
              <li>
                Service 1
                <button className="floatr"> Edit </button>
                <button className="floatr"> Delete </button>
              </li>
              <li>
                Service 2
                <button className="floatr"> Edit </button>
                <button className="floatr"> Delete </button>
              </li>
              <li>
                Service 3
                <button className="floatr"> Edit </button>
                <button className="floatr"> Delete </button>
              </li>
              <li>
                Service 4
                <button className="floatr"> Edit </button>
                <button className="floatr"> Delete </button>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    );
  }
}
export default Viewproject;
