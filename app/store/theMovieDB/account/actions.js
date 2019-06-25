import * as t from './actionTypes';

export const profileRequest = payload => ({ type: t.PROFILE_REQUEST, payload });
export const profileSuccess = payload => ({ type: t.PROFILE_SUCCESS, payload });
export const profileFailure = payload => ({ type: t.PROFILE_FAILURE, payload });
