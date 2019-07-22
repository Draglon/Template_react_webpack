import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import Cookies from 'js-cookie';
import { profile } from '../../schema';
import { getSessionId } from '../login/selectors';

import { profileSuccess, profileFailure } from './actions';
import { addEntities } from '../data/actions';
import * as t from './actionTypes';

export default createLogic({
  type: t.PROFILE_REQUEST,

  process({ apiClient, getState }, dispatch, done) {
    const sessionId = getSessionId(getState());

    apiClient
      .get(`account?session_id=${sessionId}`)
      .then(response => {
        const {
          id,
          avatar: {
            gravatar: { hash },
          },
          name,
          username,
        } = response.data;
        const data = { id, avatar: hash, name, username };
        const { entities } = normalize(data, profile);
        Cookies.set('accountId', id, { expires: 7 });
        dispatch(addEntities(entities));
        dispatch(profileSuccess({ id }));
      })
      .catch(error => dispatch(profileFailure(error)))
      .then(() => done());
  },
});
