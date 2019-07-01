import * as t from './actionTypes';

export const creditsRequest = payload => ({ type: t.CREDITS_REQUEST, payload });
export const creditsSuccess = payload => ({ type: t.CREDITS_SUCCESS, payload });
export const creditsFailure = payload => ({ type: t.CREDITS_FAILURE, payload });
