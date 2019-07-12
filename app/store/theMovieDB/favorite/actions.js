import * as t from './actionTypes';

export const favoriteRequest = payload => ({ type: t.FAVORITE_REQUEST, payload });
export const favoriteSuccess = payload => ({ type: t.FAVORITE_SUCCESS, payload });
export const favoriteFailure = payload => ({ type: t.FAVORITE_FAILURE, payload });

export const addToFavoriteRequest = payload => ({ type: t.ADD_TO_FAVORITE_REQUEST, payload });
export const addToFavoriteSuccess = payload => ({ type: t.ADD_TO_FAVORITE_SUCCESS, payload });
export const addToFavoriteFailure = payload => ({ type: t.ADD_TO_FAVORITE_FAILURE, payload });
