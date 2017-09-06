import React, { Component } from "react";
import logoCheck from "../../../public/images/logocheck.png";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

import profilepictures from "../../../public/images/profilepictures.png";

const sidebarLinks = [
  { label: "Dashboard", to: "/" },
  { label: "AddProjectttttt", to: "/addproject" }
];

class Sidebar extends Component {
  render() {
    return (
      <div className="marg">
        <nav
          className="navbar navbar-inverse navbar-fixed"
          id="sidebar-wrapper"
          role="navigation"
        >
          <ul className="nav sidebar-nav">
            <div className="sidebar-brand">
              {sidebarLinks.map((link, i) => (
                <li key={i}>
                  <NavLink strict to={link.to} activeClassName="selected">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </div>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Git</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default withRouter(Sidebar);
