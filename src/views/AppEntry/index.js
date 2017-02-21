import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import asyncComponent from 'lib/utils/asyncComponent';

import styles from './styles.css';

const Home = asyncComponent(() => System.import('views/Home').then(module => module.default));
const Post = asyncComponent(() => System.import('views/Post').then(module => module.default));

const AppEntry = props => (
  <Provider store={props.store}>
    <Router>
      <div className={styles.App}>
        <Route exact path="/" component={Home} />
        <Route path="/post/:postId" component={Post} />
      </div>
    </Router>
  </Provider>
);

AppEntry.propTypes = {
  store: React.PropTypes.any, // eslint-disable-line
};

export default AppEntry;
