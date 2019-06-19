import { createLogic } from 'redux-logic';

import { accessSuccess, accessFailure } from './actions';
import t from './actionTypes';

export default createLogic({
  type: t.ACCESS_REQUEST,

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
      .then(response3 => dispatch(accessSuccess(response3.data)))
      .catch(error => dispatch(accessFailure(error)))
      .then(() => done());
  },
});
