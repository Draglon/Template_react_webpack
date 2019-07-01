import { createLogic } from 'redux-logic';

import { searchSuccess, searchFailure } from './actions';
import * as t from './actionTypes';

export default createLogic({
  type: t.SEARCH_REQUEST,

  process({ apiClient, action }, dispatch, done) {
    apiClient
      .get(`search/movie?query=${action.payload.query}&page=${action.payload.page || 1}`)
      .then(response =>
        dispatch(
          searchSuccess({
            query: action.payload.query,
            page: action.payload.page,
            results: response.data.results,
            totalPages: action.payload.total_pages,
          }),
        ),
      )
      .catch(error => dispatch(searchFailure(error)))
      .then(() => done());
  },
});
