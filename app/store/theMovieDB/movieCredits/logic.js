import { createLogic } from 'redux-logic';

import { creditsSuccess, creditsFailure } from './actions';
import * as t from './actionTypes';

export default createLogic({
  type: t.CREDITS_REQUEST,

  process({ apiClient, action }, dispatch, done) {
    apiClient
      .get(`/movie/${action.payload.id}/credits`)
      .then(response => dispatch(creditsSuccess(response.data)))
      .catch(error => dispatch(creditsFailure(error.message)))
      .then(() => done());
  },
});
