import * as t from './actionTypes';

export const searchRequest = payload => ({ type: t.SEARCH_REQUEST, payload });
export const searchSuccess = payload => ({ type: t.SEARCH_SUCCESS, payload });
export const searchFailure = payload => ({ type: t.SEARCH_FAILURE, payload });
