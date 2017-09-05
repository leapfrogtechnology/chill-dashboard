import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import config from '../config';
import Login from './board/Login';
import Footer from './commons/Footer';
import Header from './commons/Header';
import Dashboard from './board/Dashboard';
import * as routes from '../constants/routes';
import Check from '../components/board/check';
import Viewproject from './board/Viewproject';
import StatusPage from './dashboard/StatusPage';
import Addnewservice from './board/Addnewservice';
import Addnewproject from './board/Addnewproject';

const { logoUrl, logoHeight, baseHref } = config.app;

const Router = () => (
  <BrowserRouter basename={baseHref}>
    <div>
      <Header logoUrl={logoUrl} style={{ height: logoHeight }} />
      <Switch>
        <Route exact path={routes.HOME} component={Login} />
        <Route exact path={routes.CHECK} component={Check} />
        <Route exact path={routes.DASHBOARD} component={Dashboard} />
        <Route exact path={routes.STATUSPAGE} component={StatusPage} />
        <Route exact path={routes.ADDPROJECT} component={Addnewproject} />
        <Route exact path={routes.VIEWPROJECT} component={Viewproject} />
        <Route exact path={routes.ADDSERVICES} component={Addnewservice} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Router;
