import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { movies } from '../../schema';

import { searchSuccess, searchFailure } from './actions';
import { addEntities } from '../data/actions';
import * as t from './actionTypes';

export default createLogic({
  type: t.SEARCH_REQUEST,

  process({ apiClient, action }, dispatch, done) {
    apiClient
      .get(`search/movie?query=${action.payload.query}&page=${action.payload.page}&language=en-US`)
      .then(response => {
        const normalizeData = normalize(response.data.results, [movies]);
        dispatch(addEntities(normalizeData.entities));
        dispatch(
          searchSuccess({
            ...response.data,
            query: action.payload.query,
            page: action.payload.page,
            results: normalizeData.result,
          }),
        );
        return response;
      })
      .catch(error => dispatch(searchFailure(error)))
      .then(() => done());
  },
});
