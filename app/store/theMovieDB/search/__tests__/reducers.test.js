import { searchReducer, searchInitialState } from '../reducers';
import * as t from '../actionTypes';

describe('Account profile reducer', () => {
  it('state is undefined', () => {
    expect(searchReducer(undefined, {})).toEqual(searchInitialState);
  });

  // SEARCH_REQUEST
  it('SEARCH_REQUEST after situation without error', () => {
    const action = {
      type: t.SEARCH_REQUEST,
    };

    expect(searchReducer(searchInitialState, action)).toEqual({
      ...searchInitialState,
      isLoading: true,
      error: null,
    });
  });

  // SEARCH_SUCCESS
  it('SEARCH_SUCCESS', () => {
    const stateBefore = {
      ...searchInitialState,
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
        totalPages: action.payload.totalPages,
      },
    });
  });

  // SEARCH_FAILURE
  it('SEARCH_FAILURE', () => {
    const stateBefore = {
      ...searchInitialState,
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
