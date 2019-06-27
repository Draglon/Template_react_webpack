import { createLogic } from 'redux-logic';

import { searchSuccess, searchFailure } from './actions';
import * as t from './actionTypes';

export default createLogic({
  type: t.SEARCH_REQUEST,

  process({ apiClient, action }, dispatch, done) {
    apiClient
      .get(`search/movie?query=${action.payload}`)
      .then(response => dispatch(searchSuccess(response.data)))
      .catch(error => dispatch(searchFailure(error)))
      .then(() => done());
  },
});
