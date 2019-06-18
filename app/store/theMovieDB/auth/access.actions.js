import type from './access.actionTypes';

export const accessTypeRequest = () => type.ACCESS_REQUEST;
export const accessTypeSuccess = () => type.ACCESS_SUCCESS;
export const accessTypeFailure = () => type.ACCESS_FAILURE;
export const accessTypeRemove = () => type.ACCESS_REMOVE;

export const accessRequest = payload => ({ type: type.ACCESS_REQUEST, payload });
export const accessSuccess = payload => ({ type: type.ACCESS_SUCCESS, payload });
export const accessFailure = payload => ({ type: type.ACCESS_FAILURE, payload });
export const accessRemove = () => ({ type: type.ACCESS_REMOVE });
