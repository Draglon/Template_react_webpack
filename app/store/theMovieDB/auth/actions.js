import * as t from './actionTypes';

export const accessRequest = payload => ({ type: t.ACCESS_REQUEST, payload });
export const accessSuccess = payload => ({ type: t.ACCESS_SUCCESS, payload });
export const accessFailure = payload => ({ type: t.ACCESS_FAILURE, payload });
export const accessRemove = () => ({ type: t.ACCESS_REMOVE });
