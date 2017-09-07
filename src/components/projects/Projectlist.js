import PropTypes from 'prop-types';
import React, { Component } from 'react';

import ProjectRow from './ProjectRow';

class Projectlist extends Component {
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
Projectlist.propTypes = {
  projectlist: PropTypes.array
};
export default Projectlist;
