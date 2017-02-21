import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import postPropType from 'lib/propTypes/post';

const PostList = props => (
  <div className={styles.PostList}>
    {props.posts.map((post, index) => (
      <div key={index} className={styles.PostListItem}>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </div>
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(postPropType).isRequired,
};

export default PostList;
