import React, { Component } from 'react';

import profilepictures from '../../../public/images/profilepictures.png';

class Userinfo extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="panel">
        <div className="profile">
          <div className="profile-img">
            <a className="navbar-brand index" href="#">
              <img
                src={profilepictures}
                className="img-modifiy fright"
                alt="individual-pofile-image"
              />
            </a>
          </div>
          <span className="profile-info">Aishwarya Shrestha</span>
        </div>
      </div>
    );
  }
}
export default Userinfo;
