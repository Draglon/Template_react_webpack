import * as t from './actionTypes';

export const movieRequest = payload => ({ type: t.MOVIE_REQUEST, payload });
export const movieSuccess = payload => ({ type: t.MOVIE_SUCCESS, payload });
export const movieFailure = payload => ({ type: t.MOVIE_FAILURE, payload });
