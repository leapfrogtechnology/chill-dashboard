import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Router from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/custom.css';

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
