import { createLogic } from 'redux-logic';
import { getAccountId } from '../profile/selectors';
import { getCookie } from '../../../helpers/cookie';

import { createdListsSuccess, createdListsFailure } from './actions';
import * as t from './actionTypes';

export const myListsLogic = createLogic({
  type: t.CREATED_LISTS_REQUEST,

  process({ apiClient, getState }, dispatch, done) {
    apiClient
      .get(`account/${getAccountId(getState())}/lists?session_id=${getCookie('sessionId')}&page=1`)
      .then(response => {
        console.log(response.data);
        dispatch(createdListsSuccess(response.data));
      })
      .catch(error => dispatch(createdListsFailure(error)))
      .then(() => done());
  },
});
