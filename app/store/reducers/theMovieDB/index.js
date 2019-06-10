import { combineReducers } from 'redux';

import authGuestSession from './authentication/authGuestSession.reducer';

import movie from './movie';
import searchMovie from './searchMovie';

export default combineReducers({
  authGuestSession,
  movie,
  searchMovie,
});
