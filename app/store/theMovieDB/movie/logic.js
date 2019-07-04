import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { schemaMovie } from '../../schema';

import { movieSuccess, movieFailure } from './actions';
import { addEntities } from '../data/actions';
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
        const data = {
          language: movie.spoken_languages[0].name,
          ...movie,
          ...details,
          ...response.data,
        };
        const normalizedData = normalize(data, schemaMovie);
        dispatch(addEntities(normalizedData.entities));
      })
      .catch(error => dispatch(movieFailure(error)))
      .then(() => done());
  },
});
