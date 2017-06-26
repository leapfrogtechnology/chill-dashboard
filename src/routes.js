import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as routes from './constants/routes';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/dashboard/Dashboard';

const baseHref = process.env.BASE_HREF || '/';

const Router = () => (
  <BrowserRouter basename={baseHref}>
    <Switch>
      <Route exact path={routes.DASHBOARD} component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Router;
