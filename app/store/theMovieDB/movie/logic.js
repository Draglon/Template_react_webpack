import { createLogic } from 'redux-logic';

import { movieSuccess, movieFailure } from './actions';
import * as t from './actionTypes';

export default createLogic({
  type: t.MOVIE_REQUEST,

  process({ apiClient, action }, dispatch, done) {
    const movieId = action.payload.id;
    let movie;
    let details;

    apiClient
      .get(`/movie/${movieId}`)
      .then(response => {
        movie = response.data;
        return apiClient.get(`/movie/${movieId}/credits`);
      })
      .then(response => {
        details = response.data;
        return apiClient.get(`/movie/${movieId}/images`);
      })
      .then(response => {
        dispatch(
          movieSuccess({
            ...movie,
            ...details,
            ...response.data,
          }),
        );
      })
      .catch(error => dispatch(movieFailure(error)))
      .then(() => done());
  },
});
