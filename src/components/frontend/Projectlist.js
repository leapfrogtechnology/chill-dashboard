import React, { Component } from 'react';
import keyolologo from '../../../public/images/keyolologo1.png';
import checklogo from '../../../public/images/logocheck.png';
import ProjectRow from './ProjectRow';

import { Link } from 'react-router-dom';

class Projectlist extends Component {
  constructor() {
    super();
    this.state = {
      projectlist: []
    };
  }
  render() {
    return (
      <div>
        {this.props.projectlist.map((allproject, i) => {
          return (
            <ProjectRow
              key={allproject.id}
              name={allproject.name}
              index={i}
              className="box1"
            />
          );
        })}
      </div>
    );
  }
}
export default Projectlist;
