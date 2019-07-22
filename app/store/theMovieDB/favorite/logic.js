import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { movies } from '../../schema';
import { getSessionId } from '../login/selectors';
import { getAccountId } from '../profile/selectors';

import {
  favoriteRequest,
  favoriteSuccess,
  favoriteFailure,
  addToFavoriteSuccess,
  addToFavoriteFailure,
} from './actions';
import { addEntities } from '../data/actions';
import { movieRequest } from '../movie/actions';
import * as t from './actionTypes';

export const favoriteLogic = createLogic({
  type: t.FAVORITE_REQUEST,

  process({ apiClient, getState, action }, dispatch, done) {
    const accountId = getAccountId(getState());
    const sessionId = getSessionId(getState());
    const { page } = action.payload;
    apiClient
      .get(`account/${accountId}/favorite/movies?session_id=${sessionId}&page=${page}`)
      .then(response => {
        const { entities, result } = normalize(response.data.results, [movies]);
        dispatch(addEntities(entities));
        dispatch(
          favoriteSuccess({
            ...response.data,
            results: result,
          }),
        );
      })
      .catch(error => dispatch(favoriteFailure(error)))
      .then(() => done());
  },
});

export const addToFavoriteLogic = createLogic({
  type: t.ADD_TO_FAVORITE_REQUEST,

  process({ apiClient, getState, action }, dispatch, done) {
    const accountId = getAccountId(getState());
    const sessionId = getSessionId(getState());
    const { movieId, favorite } = action.payload;
    apiClient
      .post(`account/${accountId}/favorite?session_id=${sessionId}`, {
        media_type: 'movie',
        media_id: movieId,
        favorite,
      })
      .then(response => {
        dispatch(addToFavoriteSuccess(response.data));
        dispatch(favoriteRequest({ page: 1 }));
        dispatch(movieRequest({ movieId }));
      })
      .catch(error => dispatch(addToFavoriteFailure(error)))
      .then(() => done());
  },
});
