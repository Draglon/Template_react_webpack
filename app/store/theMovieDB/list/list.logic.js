import { createLogic } from 'redux-logic';

import { createListTypeRequest, createListSuccess, createListFailure } from './list.actions';

const getCreateList = createLogic({
  type: createListTypeRequest(),

  process({ action, apiClient, apiKey }, dispatch, done) {
    apiClient
      .post(
        `list?api_key=${apiKey}&session_id=${localStorage.getItem('session_id')}`,
        action.payload,
      )
      .then(response => dispatch(createListSuccess(response.data)))
      .catch(error => dispatch(createListFailure(error)))
      .then(() => done());
  },
});

export default getCreateList;
