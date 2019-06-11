import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import { createLogic } from 'redux-logic';
import { themoviedb, apiKey } from '../../../etc/config.json';

import {
  AUTH_DELETE_SESSION_REQUEST,
  AUTH_DELETE_SESSION_SUCCESS,
  AUTH_DELETE_SESSION_FAILURE,
} from '../../constants/authentication.constants';

const url = `${themoviedb}/authentication/session`;

const deleteAuthSession = createLogic({
  type: AUTH_DELETE_SESSION_REQUEST,

  process({ getState, action }, dispatch, done) {
    axios
      .delete(`${url}?api_key=${apiKey}`, { adapter: jsonpAdapter })
      .then(response => response)
      .then(response => dispatch({ type: AUTH_DELETE_SESSION_SUCCESS, payload: response.data }))
      .catch(error =>
        dispatch({
          type: AUTH_DELETE_SESSION_FAILURE,
          payload: error,
          error: true,
        }),
      )
      .then(() => done());
  },
});

export default deleteAuthSession;
