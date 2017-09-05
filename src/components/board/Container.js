import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Addnewservice from './Addnewservice';
import Addnewproject from './Addnewproject';
import Projectlist from './Projectlist';
import Viewproject from './Viewproject';
import keyolologo from '../../../public/images/keyolologo.PNG';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class Container extends Component {
  render() {
    return (
      <div className="col10">
        <div>
          {/* <Link to="/" >i am from container Dashboard</Link> */}
          <Breadcrumb />
          <Projectlist />
          <Link exact to="/addproject" className="btn btn-primary floatr">
            Add Project{' '}
          </Link>
        </div>
      </div>
    );
  }
}

export default Container;
