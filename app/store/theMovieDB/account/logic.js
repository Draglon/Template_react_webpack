import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { profile } from '../../schema';

import { profileSuccess, profileFailure } from './actions';
import { addEntities } from '../data/actions';
import * as t from './actionTypes';

export default createLogic({
  type: t.PROFILE_REQUEST,

  process({ apiClient, action }, dispatch, done) {
    apiClient
      .get(`account?session_id=${action.payload}`)
      .then(response => {
        const data = normalize(response.data, profile);
        dispatch(addEntities(data.entities));
        dispatch(profileSuccess(response.data));
      })
      .catch(error => dispatch(profileFailure(error)))
      .then(() => done());
  },
});
