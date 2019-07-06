import * as t from './actionTypes';

export const createdListsRequest = payload => ({ type: t.CREATED_LISTS_REQUEST, payload });
export const createdListsSuccess = payload => ({ type: t.CREATED_LISTS_SUCCESS, payload });
export const createdListsFailure = payload => ({ type: t.CREATED_LISTS_FAILURE, payload });
