import { createLogic } from 'redux-logic';

import {
  AUTH_ACCESS_REQUEST,
  AUTH_ACCESS_SUCCESS,
  AUTH_ACCESS_FAILURE,
} from '../../constants/authentication.constants';

const getAuthAccess = createLogic({
  type: AUTH_ACCESS_REQUEST,

  process({ action, apiClient, apiKey }, dispatch, done) {
    apiClient
      .get(`authentication/token/new?api_key=${apiKey}`)
      .then(response1 =>
        apiClient.post(`authentication/token/validate_with_login?api_key=${apiKey}`, {
          ...action.payload,
          request_token: response1.data.request_token,
        }),
      )
      .then(response2 =>
        apiClient.post(`authentication/session/new?api_key=${apiKey}`, {
          request_token: response2.data.request_token,
        }),
      )
      .then(response3 => {
        localStorage.setItem('session_id', response3.data.session_id);
        dispatch({
          type: AUTH_ACCESS_SUCCESS,
          payload: response3.data.session_id,
        });
      })
      .catch(error => dispatch({ type: AUTH_ACCESS_FAILURE, payload: error.message, error: true }))
      .then(() => done());
  },
});

export default getAuthAccess;
