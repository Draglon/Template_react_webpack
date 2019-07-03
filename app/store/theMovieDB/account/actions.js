import * as t from './actionTypes';

export const profileRequest = () => ({ type: t.PROFILE_REQUEST });
export const profileSuccess = payload => ({ type: t.PROFILE_SUCCESS, payload });
export const profileFailure = payload => ({ type: t.PROFILE_FAILURE, payload });
