import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import find from 'lodash.find';

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import postPropType from 'lib/propTypes/post';
import isUndefined from 'lib/utils/isUndefined';

import PostForm from 'components/PostForm';

import { updatePost, deletePost, getPost } from 'actions/PostActions';

import styles from './styles.css';

class Post extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    push: PropTypes.func,
    match: PropTypes.object, // eslint-disable-line
    post: postPropType,
  };

  componentDidMount() {
    if (isUndefined(this.props.post)) {
      this.props.dispatch(getPost(this.props.match.params.postId));
    }
  }

  render() {
    const { post, dispatch, push } = this.props;
    return (
      <div className={styles.PostWrapper}>
        <div className={styles.Post}>
          <h1>{post && post.title}</h1>
          <p className={styles.PostContent}>
            {post && post.content}
          </p>
        </div>
        <button
          className={styles.Button}
          onClick={() => {
            dispatch(deletePost(post.id));
            push('/');
          }}
        >
          Remove Post?
        </button>
        <PostForm
          post={post}
          buttonText="Update Post"
          onSubmit={data => dispatch(updatePost(post.id, data))}
        />
        <Link to="/">Home</Link>
      </div>
    );
  }
}

const connectState = (state, props) => ({
  post: find(state.posts, { id: parseInt(props.match.params.postId, 10) }),
});

export default connect(connectState)(Post);
