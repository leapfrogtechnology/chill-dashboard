import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { app } from './config';
import routeConstants from './constants/routeConstants';

import Dashboard from './components/Dashboard';
import Header from './components/commons/Header';
import Footer from './components/commons/Footer';

const baseHref = process.env.BASE_HREF || '/';

const { logoUrl, logoHeight } = app;

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
