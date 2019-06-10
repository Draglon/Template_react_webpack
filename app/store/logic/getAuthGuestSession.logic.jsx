import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import { createLogic } from 'redux-logic';
import { themoviedb, apiKey } from '../../etc/config.json';

import {
  AUTH_GUEST_SESSION_REQUEST,
  AUTH_GUEST_SESSION_SUCCESS,
  AUTH_GUEST_SESSION_FAILURE,
} from '../constants/authGuestSession.constants';

const url = `${themoviedb}/authentication/guest_session/new`;

const getAuthGuestSession = createLogic({
  type: AUTH_GUEST_SESSION_REQUEST,

  process({ getState, action }, dispatch, done) {
    axios
      .get(`${url}?api_key=${apiKey}`, { adapter: jsonpAdapter })
      .then(response => response)
      .then(response => dispatch({ type: AUTH_GUEST_SESSION_SUCCESS, payload: response.data }))
      .catch(error => dispatch({ type: AUTH_GUEST_SESSION_FAILURE, payload: error, error: true }))
      .then(() => done());
  },
});

export default getAuthGuestSession;
