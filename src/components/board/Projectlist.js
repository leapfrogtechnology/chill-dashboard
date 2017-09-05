import React, { Component } from 'react';
import keyolologo from '../../../public/images/keyolologo1.png';
import checklogo from '../../../public/images/logocheck.png';

import { Link } from 'react-router-dom';

class Projectlist extends Component {
  render() {
    return (
      <div>
        {console.log(this.props.projectlist)}
        {this.props.projectlist.map(allproject => {
          return (
            <div key={allproject.id}>
              <ul>
                <li>{allproject.name}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Projectlist;
