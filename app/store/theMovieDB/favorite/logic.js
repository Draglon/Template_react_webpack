import { createLogic } from 'redux-logic';
import { getCookie } from '../../../helpers/cookie';

import { favoriteSuccess, favoriteFailure } from './actions';
import * as t from './actionTypes';

export const createList = createLogic({
  type: t.FAVORITE_REQUEST,

  process({ apiClient, action }, dispatch, done) {
    apiClient
      .get(`/account/${getCookie('sessionId')}/favorite/movies`)
      .then(response => dispatch(favoriteSuccess(response.data)))
      .catch(error => dispatch(favoriteFailure(error)))
      .then(() => done());
  },
});
