import { createLogic } from 'redux-logic';
import { denormalize, normalize } from 'normalizr';
import { schemaMovie, schemaMovieDetails, schemaMovieImages } from '../../schema';

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
        console.log(response.data);
        const data = normalize(response.data, schemaMovie);
        console.log(data);
        movie = response.data;
        return apiClient.get(`/movie/${movieId}/credits`);
      })
      .then(response => {
        console.log(response.data);
        const data = normalize(response.data, schemaMovieDetails);
        console.log(data);
        details = response.data;
        return apiClient.get(`/movie/${movieId}/images`);
      })
      .then(response => {
        console.log(response.data);
        const data = normalize(response.data, schemaMovieImages);
        console.log(data);
        dispatch(
          movieSuccess({
            language: movie.spoken_languages[0].name,
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
