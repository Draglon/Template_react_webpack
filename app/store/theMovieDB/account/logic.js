import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { profile } from '../../schema';
import { getCookie } from '../../../helpers/cookie';

import { profileSuccess, profileFailure } from './actions';
import { addEntities } from '../data/actions';
import * as t from './actionTypes';

export default createLogic({
  type: t.PROFILE_REQUEST,

  process({ apiClient }, dispatch, done) {
    apiClient
      .get(`account?session_id=${getCookie('session_id')}`)
      .then(response => {
        const { id, avatar, name, username } = response.data;
        const data = { id, avatar, name, username };
        const normalizeData = normalize(data, profile);
        dispatch(addEntities(normalizeData.entities));
        dispatch(profileSuccess(response.data));
      })
      .catch(error => dispatch(profileFailure(error)))
      .then(() => done());
  },
});
