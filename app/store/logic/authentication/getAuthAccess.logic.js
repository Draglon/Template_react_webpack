import axios from 'axios';
import { createLogic } from 'redux-logic';
import { themoviedb, apiKey } from '../../../etc/config.json';

import {
  AUTH_ACCESS_REQUEST,
  AUTH_ACCESS_SUCCESS,
  AUTH_ACCESS_FAILURE,
} from '../../constants/authentication.constants';

const urlAccess = `${themoviedb}/authentication/token/validate_with_login?api_key=${apiKey}`;
const urlToken = `${themoviedb}/authentication/token/new?api_key=${apiKey}`;
const urlSession = `${themoviedb}/authentication/session/new?api_key=${apiKey}`;

const getAuthAccess = createLogic({
  type: AUTH_ACCESS_REQUEST,

  process({ action }, dispatch, done) {
    axios
      .get(urlToken)
      .then(response1 =>
        axios.post(urlAccess, {
          ...action.payload,
          request_token: response1.data.request_token,
        }),
      )
      .then(response2 => axios.post(urlSession, { request_token: response2.data.request_token }))
      .then(response3 =>
        dispatch({
          type: AUTH_ACCESS_SUCCESS,
          payload: {
            session_id: response3.data.session_id,
          },
        }),
      )
      .catch(error => dispatch({ type: AUTH_ACCESS_FAILURE, payload: error, error: true }))
      .then(() => done());
  },
});

export default getAuthAccess;
