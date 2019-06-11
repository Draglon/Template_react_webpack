import { combineReducers } from 'redux';

import authGuestSession from './authentication/authGuestSession.reducer';
import authToken from './authentication/authToken.reducer';

import movie from './movie';
import searchMovie from './searchMovie';

export default combineReducers({
  authGuestSession,
  authToken,
  movie,
  searchMovie,
});
