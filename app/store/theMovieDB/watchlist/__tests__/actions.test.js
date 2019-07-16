import {
  watchlistRequest,
  watchlistSuccess,
  watchlistFailure,
  addToWatchlistRequest,
  addToWatchlistSuccess,
  addToWatchlistFailure,
} from '../actions';
import * as t from '../actionTypes';

describe('Watchlist - actions', () => {
  it('watchlistRequest', () => {
    const payload = { page: 1 };
    expect(watchlistRequest(payload)).toEqual({
      type: t.WATCHLIST_REQUEST,
      payload,
    });
  });

  it('watchlistSuccess', () => {
    const payload = {
      page: 1,
      results: [],
      totalPages: 0,
      totalResults: 0,
    };
    expect(watchlistSuccess(payload)).toEqual({
      type: t.WATCHLIST_SUCCESS,
      payload,
    });
  });

  it('watchlistFailure', () => {
    const payload = { message: 'message error' };
    expect(watchlistFailure(payload)).toEqual({
      type: t.WATCHLIST_FAILURE,
      payload,
    });
  });

  it('addToWatchlistRequest', () => {
    const payload = {
      movieId: 9999,
      watchlist: true,
    };
    expect(addToWatchlistRequest(payload)).toEqual({
      type: t.ADD_TO_WATCHLIST_REQUEST,
      payload,
    });
  });

  it('addToWatchlistSuccess', () => {
    const payload = { message: 'message success' };
    expect(addToWatchlistSuccess(payload)).toEqual({
      type: t.ADD_TO_WATCHLIST_SUCCESS,
      payload,
    });
  });

  it('addToWatchlistFailure', () => {
    const payload = { message: 'message error' };
    expect(addToWatchlistFailure(payload)).toEqual({
      type: t.ADD_TO_WATCHLIST_FAILURE,
      payload,
    });
  });
});
