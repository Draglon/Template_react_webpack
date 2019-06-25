import { createLogic } from 'redux-logic';

import {
  createSessionSuccess,
  createSessionFailure,
  deleteSessionSuccess,
  deleteSessionFailure,
} from './actions';
import { profileRequest } from '../account/actions';
import * as t from './actionTypes';

export const createSessionLogic = createLogic({
  type: t.CREATE_SESSION_REQUEST,

  process({ apiClient, action }, dispatch, done) {
    apiClient
      .get('authentication/token/new')
      .then(response1 =>
        apiClient.post('authentication/token/validate_with_login', {
          ...action.payload,
          request_token: response1.data.request_token,
        }),
      )
      .then(response2 =>
        apiClient.post('authentication/session/new', {
          request_token: response2.data.request_token,
        }),
      )
      .then(response3 => {
        localStorage.setItem('session_id', response3.data.session_id);
        const sessionId = localStorage.getItem('session_id');
        dispatch(createSessionSuccess(sessionId));
        dispatch(profileRequest(sessionId));
      })
      .catch(error => dispatch(createSessionFailure(error)))
      .then(() => done());
  },
});

export const deleteSessionLogic = createLogic({
  type: t.DELETE_SESSION_REQUEST,

  process({ apiClient }, dispatch, done) {
    apiClient
      .delete('authentication/session', {
        data: { session_id: localStorage.getItem('session_id') },
      })
      .then(() => {
        localStorage.removeItem('session_id');
        dispatch(deleteSessionSuccess(null));
      })
      .catch(error => dispatch(deleteSessionFailure(error)))
      .then(() => done());
  },
});
