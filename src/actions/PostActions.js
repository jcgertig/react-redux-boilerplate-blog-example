/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import createAction from 'lib/utils/createAction';
import Api from 'lib/api';

export const SET_POSTS = 'SET_POSTS';
export const setPosts = createAction(SET_POSTS);

export const ADD_POST = 'ADD_POST';
export const addPost = createAction(ADD_POST);

export const UPDATE_POST = 'UPDATE_POST';
export const updatePostDirect = createAction(UPDATE_POST);

export const DELETE_POST = 'DELETE_POST';
export const deletePostDirect = createAction(DELETE_POST);

export const getPosts = () => (dispatch) => {
  Api.posts.fetchAll()
    .then((res) => {
      dispatch(setPosts(res.data.posts));
    });
};

export const createPost = post => (dispatch) => {
  Api.posts.create({}, { post })
    .then((res) => {
      dispatch(addPost(res.data.post));
    });
};

export const getPost = postId => (dispatch) => {
  Api.posts.fetchOne({ postId })
    .then((res) => {
      dispatch(updatePostDirect(res.data.post));
    });
};

export const updatePost = (postId, post) => (dispatch) => {
  Api.posts.update({ postId }, { post })
    .then((res) => {
      dispatch(updatePostDirect(res.data.post));
    });
};

export const deletePost = postId => (dispatch) => {
  Api.posts.delete({ postId })
    .then((res) => {
      dispatch(deletePostDirect(res.data.post));
    });
};
