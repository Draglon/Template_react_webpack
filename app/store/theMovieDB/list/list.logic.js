import { createLogic } from 'redux-logic';

import { createListTypeRequest, createListSuccess, createListFailure } from './list.actions';

const getCreateList = createLogic({
  type: createListTypeRequest(),

  process({ action, apiClient, apiKey }, dispatch, done) {
    apiClient
      .post(`list?api_key=${apiKey}&session_id=${localStorage.getItem('session_id')}`, {
        name: action.payload.listname,
        description: action.payload.description,
        language: 'en',
      })
      .then(response => dispatch(createListSuccess(response.data)))
      .catch(error => dispatch(createListFailure(error.message)))
      .then(() => done());
  },
});

export default getCreateList;
