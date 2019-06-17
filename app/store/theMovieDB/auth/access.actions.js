export const type = {
  ACCESS_REQUEST: 'ACCESS_REQUEST',
  ACCESS_SUCCESS: 'ACCESS_SUCCESS',
  ACCESS_FAILURE: 'ACCESS_FAILURE',
  ACCESS_REMOVE: 'ACCESS_REMOVE',
};

export const accessTypeRequest = () => type.ACCESS_REQUEST;
export const accessTypeSuccess = () => type.ACCESS_SUCCESS;
export const accessTypeFailure = () => type.ACCESS_FAILURE;
export const accessTypeRemove = () => type.ACCESS_REMOVE;

export const accessRequest = () => ({ type: type.ACCESS_REQUEST });
export const accessSuccess = payload => ({ type: type.ACCESS_SUCCESS, payload });
export const accessFailure = payload => ({ type: type.ACCESS_FAILURE, payload });
export const accessRemove = payload => ({ type: type.ACCESS_REMOVE, payload });
