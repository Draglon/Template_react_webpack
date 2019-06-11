import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import { createLogic } from 'redux-logic';
import { themoviedb, apiKey } from '../../etc/config.json';

import {
  AUTH_TOKEN_REQUEST,
  AUTH_TOKEN_SUCCESS,
  AUTH_TOKEN_FAILURE,
} from '../constants/authentication.constants';

const url = `${themoviedb}/authentication/token/new`;

const getAuthToken = createLogic({
  type: AUTH_TOKEN_REQUEST,

  process({ getState, action }, dispatch, done) {
    axios
      .get(`${url}?api_key=${apiKey}`, { adapter: jsonpAdapter })
      .then(response => response)
      .then(response => dispatch({ type: AUTH_TOKEN_SUCCESS, payload: response.data }))
      .catch(error => dispatch({ type: AUTH_TOKEN_FAILURE, payload: error, error: true }))
      .then(() => done());
  },
});

export default getAuthToken;
