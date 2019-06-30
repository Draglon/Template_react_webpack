import { createLogic } from 'redux-logic';

import { movieSuccess, movieFailure } from './actions';
import * as t from './actionTypes';

export default createLogic({
  type: t.MOVIE_REQUEST,

  process({ apiClient, action }, dispatch, done) {
    apiClient
      .get(`/movie/`)
      .then(response =>
        dispatch(
          movieSuccess({
            query: action.payload.query,
            page: action.payload.page,
            ...response.data,
          }),
        ),
      )
      .catch(error => dispatch(movieFailure(error.message)))
      .then(() => done());
  },
});
