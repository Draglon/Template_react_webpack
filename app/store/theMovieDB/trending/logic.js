import { createLogic } from 'redux-logic';
import { getCookie } from '../../../helpers/cookie';

import { trendingSuccess, trendingFailure } from './actions';
import * as t from './actionTypes';

export default createLogic({
  type: t.TRENDING_REQUEST,

  process({ apiClient }, dispatch, done) {
    apiClient
      .get(`trending/movie/week?session_id=${getCookie('session_id')}`)
      .then(response => {
        dispatch(trendingSuccess(response.data));
      })
      .catch(error => dispatch(trendingFailure(error)))
      .then(() => done());
  },
});
