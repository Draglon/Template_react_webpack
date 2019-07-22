import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { schemaMovie } from '../../schema';
import { getSessionId } from '../login/selectors';

import { movieFailure } from './actions';
import { addEntities } from '../data/actions';
import * as t from './actionTypes';

export const movieLogic = createLogic({
  type: t.MOVIE_REQUEST,

  process({ apiClient, getState, action }, dispatch, done) {
    const sessionId = getSessionId(getState());
    const movieId = action.payload.movieId;
    let movie;
    let credits;
    let images;
    let states;

    apiClient
      .get(`movie/${movieId}`)
      .then(response => {
        movie = response.data;
        return apiClient.get(`movie/${movieId}/credits`);
      })
      .then(response => {
        credits = response.data;
        return apiClient.get(`movie/${movieId}/images`);
      })
      .then(response => {
        images = response.data;
        return apiClient.get(`movie/${movieId}/account_states?session_id=${sessionId}`);
      })
      .then(response => {
        states = response.data;
        const data = {
          language: movie.spoken_languages[0].name,
          ...movie,
          ...credits,
          ...images,
          ...states,
        };
        const { entities } = normalize(data, schemaMovie);
        dispatch(addEntities(entities));
      })
      .catch(error => dispatch(movieFailure(error)))
      .then(() => done());
  },
});
