import { createLogic } from 'redux-logic';
import { getCookie } from '../../../helpers/cookie';

import { trendingSuccess, trendingFailure } from './actions';
import * as t from './actionTypes';

export default createLogic({
  type: t.TRENDING_REQUEST,

  process({ apiClient, action }, dispatch, done) {
    apiClient
      .get(`trending/movie/week?session_id=${action.payload.sessionId}&page=${action.payload.page || 1}`)
      .then(response => {
        dispatch(trendingSuccess(response.data));
      })
      .catch(error => dispatch(trendingFailure(error)))
      .then(() => done());
  },
});
