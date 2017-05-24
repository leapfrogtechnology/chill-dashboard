import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  console.log(props)
  return (
    <div className="navbar-default sidebar">
      <div className="sidebar-nav navbar-collapse">
        <ul className="nav" id="side-menu">
          <li>
            <NavLink to='/' activeClassName="selected"><i className="fa fa-dashboard fa-fw"/> Dashboard</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
