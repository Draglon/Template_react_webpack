import { searchRequest, searchSuccess, searchFailure } from '../actions';
import * as t from '../actionTypes';

describe('Search movies - actions', () => {
  it('searchRequest', () => {
    const payload = { query: 'sarch string', page: 1 };
    expect(searchRequest(payload)).toEqual({
      type: t.SEARCH_REQUEST,
      payload,
    });
  });

  it('searchSuccess', () => {
    const payload = {
      query: 'search string',
      page: 1,
      results: [1, 2, 3],
      totalPages: 10,
    };
    expect(searchSuccess(payload)).toEqual({
      type: t.SEARCH_SUCCESS,
      payload,
    });
  });

  it('searchFailure', () => {
    const payload = 'message error';
    expect(searchFailure(payload)).toEqual({
      type: t.SEARCH_FAILURE,
      payload,
    });
  });
});
