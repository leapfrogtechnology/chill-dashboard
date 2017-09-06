import React, { Component } from "react";

import ProjectView from "./ProjectViewModel";
import Checkonly from "../board/Checkonly";

class Buttoncontainer extends Component {
  render() {
    return (
      <div className="container-fluid buttomcontainer ">
        <ProjectView />
        {/* <Checkonly /> */}
      </div>
    );
  }
}
export default Buttoncontainer;
