import React, { Component } from "react";
import { Link } from "react-router-dom";

class Topcontainer extends Component {
  render() {
    return (
      <div className="container-fluid topcontainer ">
        i am Topcontainer
        <Link exact to="/addproject" className="btn btn-primary floatr">
          Add Project
        </Link>
      </div>
    );
  }
}
export default Topcontainer;
