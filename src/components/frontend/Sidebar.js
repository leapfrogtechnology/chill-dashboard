import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

const sidebarLinks = [
  { label: 'Dashboard', to: '/' },
  { label: 'Add Project', to: '/addproject' },
  { label: 'Add Service', to: '/addproject' },
  { label: 'Team', to: '/addproject' },
  { label: 'Logout', to: '/addproject' }
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
