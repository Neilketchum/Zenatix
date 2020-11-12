import { combineReducers } from 'redux';
import searchReducer from './postReducer';

export default combineReducers({
  posts: searchReducer
});
