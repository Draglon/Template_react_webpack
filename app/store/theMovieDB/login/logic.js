import { createLogic } from 'redux-logic';
import { setCookie, getCookie } from '../../../helpers/cookie';

import {
  createSessionSuccess,
  createSessionFailure,
  deleteSessionSuccess,
  deleteSessionFailure,
} from './actions';
import { profileRequest, profileSuccess } from '../account/actions';
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
        const sessionId = response3.data.session_id;
        setCookie('session_id', sessionId);
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
        data: { session_id: getCookie('session_id') },
      })
      .then(() => {
        setCookie('session_id', '');
        setCookie('username', '');
        setCookie('user_id', '');
        setCookie('avatar', '');
        setCookie('name', '');
        dispatch(profileSuccess({ id: null, avatar: null, name: null, username: null }));
        dispatch(deleteSessionSuccess(null));
      })
      .catch(error => dispatch(deleteSessionFailure(error)))
      .then(() => done());
  },
});
