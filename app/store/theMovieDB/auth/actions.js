import * as t from './actionTypes';

export const createSessionRequest = payload => ({ type: t.CREATE_SESSION_REQUEST, payload });
export const createSessionSuccess = payload => ({ type: t.CREATE_SESSION_SUCCESS, payload });
export const createSessionFailure = payload => ({ type: t.CREATE_SESSION_FAILURE, payload });

export const deleteSessionRequest = () => ({ type: t.DELETE_SESSION_REQUEST });
export const deleteSessionSuccess = payload => ({ type: t.DELETE_SESSION_SUCCESS, payload });
export const deleteSessionFailure = payload => ({ type: t.DELETE_SESSION_FAILURE, payload });
