import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import config from './config';
import * as routeConstants from './constants/routeConstants';

import Header from './components/commons/Header';
import Footer from './components/commons/Footer';
import Dashboard from './components/dashboard/Dashboard';

const baseHref = process.env.BASE_HREF || '/';

const { logoUrl, logoHeight } = config.app;

const Router = () => (
  <BrowserRouter basename={baseHref}>
    <div>
      <Header logoUrl={logoUrl} style={{ height: logoHeight }} />
      <Switch>
        <Route exact path={routeConstants.DASHBOARD} component={Dashboard} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Router;
