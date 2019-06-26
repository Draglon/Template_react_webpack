import { createLogic } from 'redux-logic';
import { setCookie } from '../../../helpers/cookie';

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
        setCookie('username', response.data.username, now.toUTCString());
        setCookie('user_id', response.data.id, now.toUTCString());
        setCookie('avatar', response.data.avatar.gravatar.hash, now.toUTCString());
        setCookie('name', response.data.name, now.toUTCString());
        dispatch(profileSuccess(response.data));
      })
      .catch(error => dispatch(profileFailure(error)))
      .then(() => done());
  },
});
