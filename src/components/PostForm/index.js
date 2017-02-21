import React, { PropTypes, Component } from 'react';
import isEqual from 'lodash.isequal';

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import postPropType from 'lib/propTypes/post';
import isUndefined from 'lib/utils/isUndefined';

import styles from './styles.css';

const DEFAULT_STATE = {
  title: '',
  content: '',
};

class PostForm extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
    post: postPropType,
  };

  state = DEFAULT_STATE;

  componentWillMount() {
    if (typeof this.props.post !== 'undefined') {
      this.setState(this.props.post);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!isUndefined(nextProps.post)) {
      if (isUndefined(this.props.post) || !isEqual(this.props.post, nextProps.post)) {
        this.setState(nextProps.post);
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    if (typeof this.props.post === 'undefined') {
      this.setState(DEFAULT_STATE);
    }
  }

  render() {
    return (
      <form
        className={styles.PostFormWrapper}
        onSubmit={this.handleSubmit}
      >
        <input
          className={styles.PostFormInput}
          onChange={e => this.setState({ title: e.target.value })}
          placeholder="Title"
          value={this.state.title}
        />
        <textarea
          className={styles.PostFormInput}
          onChange={e => this.setState({ content: e.target.value })}
          placeholder="Content"
          value={this.state.content}
        />
        <button type="submit" className={styles.SubmitButton}>
          {this.props.buttonText}
        </button>
      </form>
    );
  }
}

export default PostForm;
