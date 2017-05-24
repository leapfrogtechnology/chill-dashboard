import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/custom.css';
import 'font-awesome/css/font-awesome.min.css';

import Router from './routes';

const mountNode = document.getElementById('app');

const renderApp = () => {
  render(
    <AppContainer>
      <Router/>
    </AppContainer>,
    mountNode
  );
};

renderApp();

// Hot Module Replacement API
if (module.hot) {
 module.hot.accept('./routes', () => renderApp());
 }
