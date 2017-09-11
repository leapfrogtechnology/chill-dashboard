import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Userinfo from '../projects/UserInfo';
import logoCheck from '../../../public/images/chill.png';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-custom nomargin">
        <div className="container-fluid">
          <div className="navbar-header ">
            <a className="navbar-brand nopadding" href="#">
              <img src={logoCheck} className="img-modifiy " alt="chill-logo" />
            </a>
          </div>
          <div className="navbar-header shift ">
            <span className="projectname">
              <Link to="/projectpanel"> CHILL</Link>
            </span>
          </div>
          {/* <div className="panel">
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
          </div>  */}
          <Userinfo />
        </div>
      </nav>
    );
  }
}
export default Header;
