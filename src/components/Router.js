import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import config from '../config';
import * as routes from '../constants/routes';

import Header from './commons/Header';
import Footer from './commons/Footer';
import StatusPage from './dashboard/StatusPage';
import Dashboard from './board/Dashboard';
import Login from './board/Login';
import Addnewproject from './board/Addnewproject';
import Viewservice from './board/Viewservice';
import Addnewservice from './board/Addnewservice';

const { logoUrl, logoHeight, baseHref } = config.app;

const Router = () => (
  <BrowserRouter basename={baseHref}>
    <div>
      <Header logoUrl={logoUrl} style={{ height: logoHeight }} />
      <Switch>
        <Route exact path={routes.HOME} component={Login} />
        <Route exact path={routes.STATUSPAGE} component={StatusPage} />

        <Route exact path={routes.ADDPROJECT} component={Addnewproject} />
        <Route exact path={routes.DASHBOARD} component={Dashboard} />
        <Route exact path={routes.VIEWSERVICES} component={Viewservice} />
        <Route exact path={routes.ADDSERVICES} component={Addnewservice} />


      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Router;
