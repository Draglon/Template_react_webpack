import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import { createLogic } from 'redux-logic';
import { themoviedb, apiKey } from '../../../etc/config.json';

import {
  AUTH_SESSION_WITH_LOGIN_REQUEST,
  AUTH_SESSION_WITH_LOGIN_SUCCESS,
  AUTH_SESSION_WITH_LOGIN_FAILURE,
} from '../../constants/authentication.constants';

const url = `${themoviedb}/authentication/token/validate_with_login`;

const getAuthSessionWithLogin = createLogic({
  type: AUTH_SESSION_WITH_LOGIN_REQUEST,

  process({ getState, action }, dispatch, done) {
    axios
      .post(`${url}?api_key=${apiKey}`, action.payload)
      .then(response => response)
      .then(response => dispatch({ type: AUTH_SESSION_WITH_LOGIN_SUCCESS, payload: response.data }))
      .catch(error =>
        dispatch({
          type: AUTH_SESSION_WITH_LOGIN_FAILURE,
          payload: error,
          error: true,
        }),
      )
      .then(() => done());
  },
});

export default getAuthSessionWithLogin;
