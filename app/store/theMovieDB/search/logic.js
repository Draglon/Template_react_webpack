import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { movies } from '../../schema';

import { searchSuccess, searchFailure } from './actions';
import { addEntities } from '../data/actions';
import * as t from './actionTypes';

export default createLogic({
  type: t.SEARCH_REQUEST,

  process({ apiClient, action }, dispatch, done) {
    const { query, page } = action.payload;

    apiClient
      .get(`search/movie?query=${query}&page=${page}&language=en-US`)
      .then(response => {
        const { entities, result } = normalize(response.data.results, [movies]);
        dispatch(addEntities(entities));
        dispatch(
          searchSuccess({
            ...response.data,
            query,
            page,
            results: result,
          }),
        );
        return response;
      })
      .catch(error => dispatch(searchFailure(error)))
      .then(() => done());
  },
});
