import { createLogic } from 'redux-logic';

import actions from './list.actions';

const getCreateList = createLogic({
  type: actions.CREATE_LIST_REQUEST,

  process({ action, apiClient, apiKey }, dispatch, done) {
    apiClient
      .post(
        `list?api_key=${apiKey}&session_id=${localStorage.getItem('session_id')}`,
        action.payload,
      )
      .then(response => {
        dispatch({ type: actions.CREATE_LIST_SUCCESS, payload: response.data });
      })
      .catch(error => dispatch({ type: actions.CREATE_LIST_FAILURE, payload: error, error: true }))
      .then(() => done());
  },
});

export default getCreateList;
