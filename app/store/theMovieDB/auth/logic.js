import { createLogic } from 'redux-logic';

import { accessSuccess, accessFailure } from './actions';
import * as t from './actionTypes';

export default createLogic({
  type: t.ACCESS_REQUEST,

  process({ action, apiClient }, dispatch, done) {
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
        return dispatch(accessSuccess(localStorage.getItem('session_id')));
      })
      .catch(error => dispatch(accessFailure(error)))
      .then(() => done());
  },
});
