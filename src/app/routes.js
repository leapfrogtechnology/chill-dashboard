import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from './constants/routes';

import Dashboard from './components/dashboard/Dashboard';
import Sidebar from './components/sidebar/Sidebar';

const baseHref = process.env.BASE_HREF || '/';

const Router = () => (
  <BrowserRouter basename={baseHref}>
    <div id="wrapper">
      <div className="navbar navbar-default navbar-static-top">
        <div className="navbar-header">
          <a className="navbar-brand">Chill</a>
        </div>
        <Sidebar />
      </div>

      <div id="page-wrapper">
        <Switch>
          <Route exact path={routes.DASHBOARD} component={Dashboard}/>
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default Router;
