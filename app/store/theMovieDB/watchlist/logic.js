import { createLogic } from 'redux-logic';
import { getSessionId } from '../login/selectors';
import { getAccountId } from '../profile/selectors';

import {
  watchlistSuccess,
  watchlistFailure,
  addToWatchlistSuccess,
  addToWatchlistFailure,
} from './actions';
import * as t from './actionTypes';

export const watchlistLogic = createLogic({
  type: t.WATCHLIST_REQUEST,

  process({ apiClient, getState, action }, dispatch, done) {
    const accountId = getAccountId(getState());
    const sessionId = getSessionId(getState());
    const page = action.payload.page;
    apiClient
      .get(`account/${accountId}/watchlist/movies?session_id=${sessionId}&page=${page}`)
      .then(response => {
        console.log(response.data);
        dispatch(watchlistSuccess(response.data));
      })
      .catch(error => dispatch(watchlistFailure(error)))
      .then(() => done());
  },
});

export const addToWatchlistLogic = createLogic({
  type: t.ADD_TO_WATCHLIST_REQUEST,

  process({ apiClient, getState, action }, dispatch, done) {
    const accountId = getAccountId(getState());
    const sessionId = getSessionId(getState());
    const movieId = action.payload.movieId;
    const watchlist = action.payload.watchlist;
    apiClient
      .post(`account/${accountId}/watchlist?session_id=${sessionId}`, {
        media_type: 'movie',
        media_id: movieId,
        watchlist,
      })
      .then(response => {
        console.log('movieId ', movieId, 'watchlist ', watchlist);
        dispatch(addToWatchlistSuccess(response.data));
      })
      .catch(error => dispatch(addToWatchlistFailure(error)))
      .then(() => done());
  },
});
