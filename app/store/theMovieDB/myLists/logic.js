import { createLogic } from 'redux-logic';
import { getSessionId } from '../login/selectors';
import { getAccountId } from '../profile/selectors';

import {
  createdListsRequest,
  createdListsSuccess,
  createdListsFailure,
  createListSuccess,
  createListFailure,
  deleteListSuccess,
  deleteListFailure,
} from './actions';
import * as t from './actionTypes';

export const myListsLogic = createLogic({
  type: t.CREATED_LISTS_REQUEST,

  process({ apiClient, getState, action }, dispatch, done) {
    const sessionId = getSessionId(getState());
    const accountId = getAccountId(getState());
    const page = action.payload.page;
    apiClient
      .get(`account/${accountId}/lists?session_id=${sessionId}&page=${page}&language=en-US`)
      .then(response => {
        dispatch(createdListsSuccess(response.data));
      })
      .catch(error => dispatch(createdListsFailure(error)))
      .then(() => done());
  },
});

export const createList = createLogic({
  type: t.CREATE_LIST_REQUEST,

  process({ apiClient, getState, action }, dispatch, done) {
    const sessionId = getSessionId(getState());
    apiClient
      .post(`list?session_id=${sessionId}`, { ...action.payload.values, language: 'en' })
      .then(response => {
        dispatch(createListSuccess(response.data));
        dispatch(createdListsRequest({ page: 1 }));
        action.payload.actions.setSubmitting(false);
        action.payload.hideModal();
      })
      .catch(error => dispatch(createListFailure(error)))
      .then(() => done());
  },
});

export const deleteListLogic = createLogic({
  type: t.DELETE_LIST_REQUEST,

  process({ apiClient, getState, action }, dispatch, done) {
    const listId = action.payload.listId;
    const sessionId = getSessionId(getState());
    apiClient
      .delete(`list/${listId}?session_id=${sessionId}`)
      .then(response => {
        dispatch(deleteListSuccess(response.data));
        dispatch(createdListsRequest({ page: 1 }));
      })
      .catch(error => {
        dispatch(deleteListFailure(error));
        dispatch(createdListsRequest({ page: 1 }));
      })
      .then(() => done());
  },
});
