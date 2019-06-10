import { combineReducers } from 'redux';

export { default as movieReducer } from './movie';

export default combineReducers({
  movie: movieReducer,
});
