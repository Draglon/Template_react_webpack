import { combineReducers } from 'redux';

import authAccess from './authentication/authAccess.reducer';

// import movie from './movie/movie';
// import searchMovie from './movie/searchMovie';

export default combineReducers({
  authAccess,
  // movie,
  // searchMovie,
});
