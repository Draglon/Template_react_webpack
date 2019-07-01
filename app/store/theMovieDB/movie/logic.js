import { createLogic } from 'redux-logic';

import {
  movieSuccess,
  movieFailure,
  creditsSuccess,
  creditsFailure,
  imagesSuccess,
  imagesFailure,
} from './actions';
import * as t from './actionTypes';

export const movieLogic = createLogic({
  type: t.MOVIE_REQUEST,

  process({ apiClient, action }, dispatch, done) {
    apiClient
      .get(`/movie/${action.payload.id}`)
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

export const movieCreditsLogic = createLogic({
  type: t.CREDITS_REQUEST,

  process({ apiClient, action }, dispatch, done) {
    apiClient
      .get(`/movie/${action.payload.id}/credits`)
      .then(response => dispatch(creditsSuccess(response.data)))
      .catch(error => dispatch(creditsFailure(error.message)))
      .then(() => done());
  },
});

export const movieImagesLogic = createLogic({
  type: t.MOVIE_IMAGES_REQUEST,

  process({ apiClient, action }, dispatch, done) {
    apiClient
      .get(`/movie/${action.payload.id}/images`)
      .then(response => dispatch(imagesSuccess(response.data)))
      .catch(error => dispatch(imagesFailure(error.message)))
      .then(() => done());
  },
});
