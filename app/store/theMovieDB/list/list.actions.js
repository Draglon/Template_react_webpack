export const type = {
  CREATE_LIST_REQUEST: 'CREATE_LIST_REQUEST',
  CREATE_LIST_SUCCESS: 'CREATE_LIST_SUCCESS',
  CREATE_LIST_FAILURE: 'CREATE_LIST_FAILURE',
};

export const createListTypeRequest = () => type.CREATE_LIST_REQUEST;
export const createListTypeSuccess = () => type.CREATE_LIST_SUCCESS;
export const createListTypeFailure = () => type.CREATE_LIST_FAILURE;

export const createListRequest = () => ({ type: type.CREATE_LIST_REQUEST });
export const createListSuccess = payload => ({ type: type.CREATE_LIST_SUCCESS, payload });
export const createListFailure = payload => ({ type: type.CREATE_LIST_FAILURE, payload });
