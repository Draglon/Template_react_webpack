import { createLogic } from 'redux-logic';
import { setCookie } from '../../../helpers/cookie';

import { profileSuccess, profileFailure } from './actions';
import * as t from './actionTypes';

export default createLogic({
  type: t.PROFILE_REQUEST,

  process({ apiClient, action }, dispatch, done) {
    apiClient
      .get(`account?session_id=${action.payload}`)
      .then(response => {
        const id = response.data.id;
        const avatar = response.data.avatar.gravatar.hash;
        const name = response.data.name;
        const username = response.data.username;
        setCookie('username', username);
        setCookie('user_id', id);
        setCookie('avatar', avatar);
        setCookie('name', name);
        dispatch(profileSuccess({ id, avatar, name, username }));
      })
      .catch(error => dispatch(profileFailure(error)))
      .then(() => done());
  },
});
