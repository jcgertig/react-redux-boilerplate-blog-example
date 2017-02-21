import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../reducers';

export default function configure(initialState) {
  const middleware = [
    thunk,
  ];

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      (window && window.devToolsExtension) ? window.devToolsExtension() : f => f,
    ),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../../reducers/index', () =>
      store.replaceReducer(require('../../reducers/index').default),
    );
  }

  return store;
}
