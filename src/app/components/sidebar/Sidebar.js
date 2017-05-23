import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="navbar-default sidebar">
    <div className="sidebar-nav navbar-collapse">
      <ul className="nav" id="side-menu">
        <li>
          <a><i className="fa fa-dashboard fa-fw"/> <Link to='/'>Dashboard</Link></a>
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;
