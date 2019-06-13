import { combineReducers } from 'redux';

import authAccess from './authentication/authAccess.reducer';

import createList from './list/createList.reducer';

// import movie from './movie/movie';
// import searchMovie from './movie/searchMovie';

export default combineReducers({
  authAccess,
  createList,
  // movie,
  // searchMovie,
});
