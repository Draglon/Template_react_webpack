import getAuthGuestSession from './authentication/getAuthGuestSession.logic';
import getAuthToken from './authentication/getAuthToken.logic';
import postAuthSession from './authentication/postAuthSession.logic';
import postAuthSessionWithLogin from './authentication/postAuthSessionWithLogin.logic';
import deleteAuthSession from './authentication/deleteAuthSession.logic';

import getMovie from './getMovie.logic';
import getSearchMovie from './getSearchMovie.logic';

export default [
  getAuthGuestSession,
  getAuthToken,
  postAuthSession,
  postAuthSessionWithLogin,
  deleteAuthSession,
  getMovie,
  getSearchMovie,
];
