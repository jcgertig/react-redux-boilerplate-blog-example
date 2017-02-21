import find from 'lodash.find';

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import defaultState from 'lib/store/default';
import { SET_POSTS, ADD_POST, UPDATE_POST, DELETE_POST } from 'actions/PostActions';

export default function posts(state = defaultState.posts, action) {
  switch (action.type) {
    case SET_POSTS:
      return action.payload;
    case ADD_POST:
      return [...state, action.payload];
    case UPDATE_POST: {
      const index = find(state, { id: action.payload.id });
      if (typeof index !== 'undefined') {
        const newState = [...state];
        newState.splice(index, 1, action.payload);
        return newState;
      }
      return [...state, action.payload];
    }
    case DELETE_POST: {
      const index = find(state, { id: action.payload.id });
      if (typeof index !== 'undefined') {
        const newState = [...state];
        newState.splice(index, 1);
        return newState;
      }
      return state;
    }
    default:
      return state;
  }
}
