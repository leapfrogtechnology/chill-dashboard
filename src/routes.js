import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import config from './config';
import routeConstants from './constants/routeConstants';

import Dashboard from './components/Dashboard';
import Header from './components/commons/Header';
import Footer from './components/commons/Footer';

const baseHref = process.env.BASE_HREF || '/';

const Router = () => (
  <BrowserRouter basename={baseHref}>
    <div>
      <Header logoUrl={config.app.logoUrl} style={{ height: config.app.logoHeight }} />
      <Switch>
        <Route exact path={routeConstants.DASHBOARD} component={Dashboard} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Router;
