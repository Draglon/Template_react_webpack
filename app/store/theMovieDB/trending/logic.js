import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { movies } from '../../schema';
import { getCookie } from '../../../helpers/cookie';

import { trendingSuccess, trendingFailure } from './actions';
import { addEntities } from '../data/actions';
import * as t from './actionTypes';

export default createLogic({
  type: t.TRENDING_REQUEST,

  process({ apiClient, action }, dispatch, done) {
    apiClient
      .get(`trending/movie/week?session_id=${getCookie('sessionId')}&page=${action.payload.page}&language=en-US`)
      .then(response => {
        const normalizeData = normalize(response.data.results, [movies]);
        dispatch(addEntities(normalizeData.entities));
        dispatch(
          trendingSuccess({
            ...response.data,
            results: normalizeData.result,
          }),
        );
      })
      .catch(error => dispatch(trendingFailure(error)))
      .then(() => done());
  },
});
