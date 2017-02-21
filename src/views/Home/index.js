import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import postPropType from 'lib/propTypes/post';

import PostList from 'components/PostList';
import PostForm from 'components/PostForm';

import { createPost, getPosts } from 'actions/PostActions';

import styles from './styles.css';

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    posts: PropTypes.arrayOf(postPropType),
  };

  componentWillMount() {
    this.props.dispatch(getPosts());
  }

  render() {
    return (
      <div className={styles.Home}>
        <PostList posts={this.props.posts} />
        <PostForm
          buttonText="Create Post"
          onSubmit={data => this.props.dispatch(createPost(data))}
        />
      </div>
    );
  }
}

const connectState = state => ({
  posts: state.posts,
});

export default connect(connectState)(Home);
