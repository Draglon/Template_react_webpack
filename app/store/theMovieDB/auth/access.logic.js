import { createLogic } from 'redux-logic';

import { accessTypeRequest, accessSuccess, accessFailure } from './access.actions';

const getAuthAccess = createLogic({
  type: accessTypeRequest(),

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
        dispatch(accessSuccess(response3.data.session_id));
      })
      .catch(error => dispatch(accessFailure(error.message)))
      .then(() => done());
  },
});

export default getAuthAccess;
