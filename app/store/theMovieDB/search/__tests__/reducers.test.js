import { searchReducer } from '../reducers';
import * as t from '../actionTypes';

describe('Search movies - reducer', () => {
  it('state is undefined', () => {
    expect(searchReducer(undefined, {})).toEqual({
      isLoading: false,
      data: {
        query: '',
        page: 1,
        results: [],
        totalPages: 0,
      },
      error: null,
    });
  });

  it('SEARCH_REQUEST', () => {
    const state = {
      isLoading: false,
      error: 'some error',
    };

    const action = {
      type: t.SEARCH_REQUEST,
    };

    expect(searchReducer(state, action)).toEqual({
      isLoading: true,
      error: null,
    });
  });

  it('SEARCH_SUCCESS', () => {
    const state = {
      isLoading: true,
      data: {
        query: '',
        page: 1,
        results: [],
        totalPages: 0,
      },
    };

    const action = {
      type: t.SEARCH_SUCCESS,
      payload: {
        query: 'search string',
        page: 1,
        results: [1, 2, 3],
        totalPages: 10,
      },
    };

    expect(searchReducer(state, action)).toEqual({
      isLoading: false,
      data: {
        query: action.payload.query,
        page: action.payload.page,
        results: action.payload.results,
        totalPages: action.payload.total_pages,
      },
    });
  });

  it('SEARCH_FAILURE', () => {
    const state = {
      isLoading: true,
      data: {
        query: '',
        page: 1,
        results: [],
        totalPages: 0,
      },
      error: null,
    };

    const action = {
      type: t.SEARCH_FAILURE,
      payload: {
        message: 'error message',
      },
    };

    expect(searchReducer(state, action)).toEqual({
      isLoading: false,
      data: {
        query: '',
        page: 1,
        results: [],
        totalPages: 0,
      },
      error: action.payload.message,
    });
  });
});
