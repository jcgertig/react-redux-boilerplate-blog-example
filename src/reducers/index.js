import { combineReducers } from 'redux';
import posts from './PostReducer';

const rootReducer = combineReducers({
  posts,
});

export default rootReducer;
