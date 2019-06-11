import { combineReducers } from 'redux';

import authGuestSession from './authentication/authGuestSession.reducer';
import authToken from './authentication/authToken.reducer';
import authSession from './authentication/authSession.reducer';
import authSessionWithLogin from './authentication/authSessionWithLogin.reducer';
import authDeleteSession from './authentication/authDeleteSession.reducer';

import movie from './movie';
import searchMovie from './searchMovie';

export default combineReducers({
  authGuestSession,
  authToken,
  authSession,
  authSessionWithLogin,
  authDeleteSession,
  // movie,
  // searchMovie,
});
