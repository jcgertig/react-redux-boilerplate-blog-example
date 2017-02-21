// ./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import App from './views/AppEntry';

import initialState from './lib/store/default';
import configureStore from './lib/store/configure';

const render = (Component, store) => {
  ReactDOM.render(
    (
      <AppContainer>
        <Component store={store} />
      </AppContainer>
    ),
    document.getElementById('root'),
  );
};

const store = configureStore(initialState);

render(App, store);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./views/AppEntry', () => {
    render(App, store);
  });
}
