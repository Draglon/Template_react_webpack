import * as t from './actionTypes';

export const watchlistRequest = payload => ({ type: t.WATCHLIST_REQUEST, payload });
export const watchlistSuccess = payload => ({ type: t.WATCHLIST_SUCCESS, payload });
export const watchlistFailure = payload => ({ type: t.WATCHLIST_FAILURE, payload });

export const addToWatchlistRequest = payload => ({ type: t.ADD_TO_WATCHLIST_REQUEST, payload });
export const addToWatchlistSuccess = payload => ({ type: t.ADD_TO_WATCHLIST_SUCCESS, payload });
export const addToWatchlistFailure = payload => ({ type: t.ADD_TO_WATCHLIST_FAILURE, payload });
