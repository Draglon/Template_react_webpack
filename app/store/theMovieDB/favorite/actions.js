import * as t from './actionTypes';

export const favoriteRequest = payload => ({ type: t.FAVORITE_REQUEST, payload });
export const favoriteSuccess = payload => ({ type: t.FAVORITE_SUCCESS, payload });
export const favoriteFailure = payload => ({ type: t.FAVORITE_FAILURE, payload });
