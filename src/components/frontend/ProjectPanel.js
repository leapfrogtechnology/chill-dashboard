import React, { Component } from 'react';

import Container from '../../components/frontend/Container';
import Sidebar from '../../components/frontend/Sidebar';

class ProjectPanel extends Component {
  render() {
    return (
      <div className="container-fluid wrapall">
        <div className="row">
          <div className="col-md-2 ">
            <div className="color1">
              <Sidebar />
            </div>
          </div>

          <div className="col-md-10 ">
            <div className="color2">
              <Container />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPanel;
