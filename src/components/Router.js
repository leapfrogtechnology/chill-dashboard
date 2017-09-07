import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import config from '../config';
import Login from './login/Index';
import Footer from './commons/Footer';
import Header from './commons/Header';
import * as routes from '../constants/routes';
import StatusPage from './dashboard/StatusPage';
import Addnewproject from './projects/Addnewproject';
import Projectpanel from '../components/projects/ProjectPanel';

const { logoUrl, logoHeight, baseHref } = config.app;

const Router = () => (
  <BrowserRouter basename={baseHref}>
    <div>
      <Header logoUrl={logoUrl} style={{ height: logoHeight }} />
      <Switch>
        <Route exact path={routes.HOME} component={Login} />
        <Route exact path={routes.STATUSPAGE} component={StatusPage} />
        <Route exact path={routes.ADDPROJECT} component={Addnewproject} />
        <Route exact path={routes.PROJECTPANEL} component={Projectpanel} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Router;
