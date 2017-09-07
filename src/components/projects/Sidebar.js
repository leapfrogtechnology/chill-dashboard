import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

const sidebarLinks = [
  { label: 'Dashboard', to: '/' },
  { label: 'Team', to: '/addproject' },
  { label: 'Logout', to: '/addproject' },
  { label: 'Add Service', to: '/addproject' },
  { label: 'Add Project', to: '/statuspage' }
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
          </ul>
        </nav>
      </div>
    );
  }
}
export default withRouter(Sidebar);
