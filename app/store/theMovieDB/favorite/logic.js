import { createLogic } from 'redux-logic';
import { getCookie } from '../../../helpers/cookie';

import { favoriteSuccess, favoriteFailure } from './actions';
import * as t from './actionTypes';

// Get favorite movie
// eslint-disable-next-line import/prefer-default-export
export const createList = createLogic({
  type: t.FAVORITE_REQUEST,

  process({ action, apiClient }, dispatch, done) {
    apiClient
      .get(`/account/${getCookie('session_id')}/favorite/movies`)
      .then(response => dispatch(favoriteSuccess(response.data)))
      .catch(error => dispatch(favoriteFailure(error)))
      .then(() => done());
  },
});
