import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { movies } from '../../schema';
import { getSessionId } from '../login/selectors';

import { trendingSuccess, trendingFailure } from './actions';
import { addEntities } from '../data/actions';
import * as t from './actionTypes';

export default createLogic({
  type: t.TRENDING_REQUEST,

  process({ apiClient, getState, action }, dispatch, done) {
    const sessionId = getSessionId(getState());
    const { page } = action.payload;

    apiClient
      .get(`trending/movie/week?session_id=${sessionId}&page=${page}&language=en-US`)
      .then(response => {
        const { entities, result } = normalize(response.data.results, [movies]);
        dispatch(addEntities(entities));
        dispatch(
          trendingSuccess({
            ...response.data,
            results: result,
          }),
        );
      })
      .catch(error => dispatch(trendingFailure(error)))
      .then(() => done());
  },
});
