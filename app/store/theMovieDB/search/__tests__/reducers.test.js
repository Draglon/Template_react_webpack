import { searchReducer, initialState } from '../reducers';
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
      error: 'Error',
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
    const stateBefore = {
      ...initialState,
      isLoading: true,
      error: null,
    };

    const action = {
      type: t.SEARCH_SUCCESS,
      payload: {
        query: '',
        page: 1,
        results: [],
        totalPages: 0,
      },
    };

    expect(searchReducer(stateBefore, action)).toEqual({
      ...stateBefore,
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
    const stateBefore = {
      ...initialState,
      isLoading: true,
    };

    const action = {
      type: t.SEARCH_FAILURE,
      payload: {
        message: 'error message',
      },
    };

    expect(searchReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLoading: false,
      error: action.payload.message,
    });
  });
});
