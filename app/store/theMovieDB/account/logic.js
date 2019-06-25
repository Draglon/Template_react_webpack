import { createLogic } from 'redux-logic';

import { profileSuccess, profileFailure } from './actions';
import * as t from './actionTypes';

export default createLogic({
  type: t.PROFILE_REQUEST,

  process({ apiClient, action }, dispatch, done) {
    apiClient
      .get(`/account?session_id=${action.payload}`)
      .then(response => {
        const now = new Date();
        now.setTime(now.getTime() + 24 * 3600 * 1000);
        document.cookie = `username=${response.data.username};expires=${now.toUTCString()}`;
        dispatch(profileSuccess(response.data));
      })
      .catch(error => dispatch(profileFailure(error)))
      .then(() => done());
  },
});
