import { createLogic } from 'redux-logic';
import { denormalize, normalize } from 'normalizr';
import { trending } from '../../schema';
import { getCookie } from '../../../helpers/cookie';

import { trendingSuccess, trendingFailure } from './actions';
import * as t from './actionTypes';

export default createLogic({
  type: t.TRENDING_REQUEST,

  process({ apiClient, action }, dispatch, done) {
    apiClient
      .get(`trending/movie/week?session_id=${getCookie('sessionId')}&page=${action.payload.page}`)
      .then(response => {
        console.log(response.data);
        const data = normalize(response.data, trending);
        console.log(data);
        dispatch(
          trendingSuccess({
            page: action.payload.page,
            results: response.data.results,
            totalPages: response.data.total_pages,
          }),
        );
        return response;
      })
      .catch(error => dispatch(trendingFailure(error)))
      .then(() => done());
  },
});
