import { trendingReducer } from '../reducers';
import * as t from '../actionTypes';

describe('Trending reducer', () => {
  it('state is undefined', () => {
    expect(trendingReducer(undefined, {})).toEqual({
      isLoading: false,
      data: {
        page: 1,
        results: [],
        totalPages: 0,
      },
      error: null,
    });
  });

  it('TRENDING_REQUEST', () => {
    const state = {
      isLoading: false,
      error: 'some error',
    };
    const action = {
      type: t.TRENDING_REQUEST,
    };

    expect(trendingReducer(state, action)).toEqual({
      isLoading: true,
      error: null,
    });
  });

  it('TRENDING_SUCCESS', () => {
    const state = {
      isLoading: true,
      data: {
        page: 1,
        results: [],
        totalPages: 0,
      },
    };

    const action = {
      type: t.TRENDING_SUCCESS,
      payload: {
        page: 1,
        results: [1, 2, 3],
        totalPages: 10,
      },
    };

    expect(trendingReducer(state, action)).toEqual({
      isLoading: false,
      data: {
        page: action.payload.page,
        results: action.payload.results,
        totalPages: action.payload.total_pages,
      },
    });
  });

  it('TRENDING_FAILURE', () => {
    const state = {
      isLoading: true,
      error: null,
    };

    const action = {
      type: t.TRENDING_FAILURE,
      payload: {
        message: 'error message',
      },
    };

    expect(trendingReducer(state, action)).toEqual({
      isLoading: false,
      error: action.payload.message,
    });
  });
});
