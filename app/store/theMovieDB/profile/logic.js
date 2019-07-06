import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { profile } from '../../schema';
import { getCookie, setCookie } from '../../../helpers/cookie';

import { profileSuccess, profileFailure } from './actions';
import { addEntities } from '../data/actions';
import * as t from './actionTypes';

export default createLogic({
  type: t.PROFILE_REQUEST,

  process({ apiClient }, dispatch, done) {
    apiClient
      .get(`account?session_id=${getCookie('sessionId')}`)
      .then(response => {
        const { id, avatar: { gravatar: { hash } }, name, username } = response.data;
        const data = { id, avatar: hash, name, username };
        const normalizeData = normalize(data, profile);
        setCookie('accountId', id);
        dispatch(addEntities(normalizeData.entities));
        dispatch(profileSuccess({ id }));
      })
      .catch(error => dispatch(profileFailure(error)))
      .then(() => done());
  },
});
