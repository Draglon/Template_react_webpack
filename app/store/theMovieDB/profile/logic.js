import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import Cookies from 'js-cookie';
import { profile } from '../../schema';

import { profileSuccess, profileFailure } from './actions';
import { addEntities } from '../data/actions';
import * as t from './actionTypes';

export default createLogic({
  type: t.PROFILE_REQUEST,

  process({ apiClient }, dispatch, done) {
    apiClient
      .get(`account?session_id=${Cookies.get('sessionId')}`)
      .then(response => {
        const { id, avatar: { gravatar: { hash } }, name, username } = response.data;
        const data = { id, avatar: hash, name, username };
        const normalizeData = normalize(data, profile);
        Cookies.set('accountId', id, { expires: 7 });
        dispatch(addEntities(normalizeData.entities));
        dispatch(profileSuccess({ id }));
      })
      .catch(error => dispatch(profileFailure(error)))
      .then(() => done());
  },
});
