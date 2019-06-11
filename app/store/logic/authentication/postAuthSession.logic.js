import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import { createLogic } from 'redux-logic';
import { themoviedb, apiKey } from '../../../etc/config.json';

import {
  AUTH_SESSION_REQUEST,
  AUTH_SESSION_SUCCESS,
  AUTH_SESSION_FAILURE,
} from '../../constants/authentication.constants';

const url = `${themoviedb}/authentication/session/new`;

const getAuthSession = createLogic({
  type: AUTH_SESSION_REQUEST,

  process({ getState, action }, dispatch, done) {
    axios
      .post(`${url}?api_key=${apiKey}`, action.payload)
      .then(response => response)
      .then(response => dispatch({ type: AUTH_SESSION_SUCCESS, payload: response.data }))
      .catch(error => dispatch({ type: AUTH_SESSION_FAILURE, payload: error, error: true }))
      .then(() => done());
  },
});

export default getAuthSession;
