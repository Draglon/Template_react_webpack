import { trendingReducer, trendingInitialState } from '../reducers';
import * as t from '../actionTypes';

describe('Trending reducer', () => {
  it('state is undefined', () => {
    expect(trendingReducer(undefined, {})).toEqual(trendingInitialState);
  });

  it('TRENDING_REQUEST', () => {
    const action = {
      type: t.TRENDING_REQUEST,
    };

    expect(trendingReducer(trendingInitialState, action)).toEqual({
      ...trendingInitialState,
      isLoading: true,
      error: null,
    });
  });

  it('TRENDING_SUCCESS', () => {
    const stateBefore = {
      ...trendingInitialState,
      isLoading: true,
    };

    const action = {
      type: t.TRENDING_SUCCESS,
      payload: {
        page: 1,
        results: [],
        totalPages: 0,
      },
    };

    expect(trendingReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLoading: false,
      data: {
        page: action.payload.page,
        results: action.payload.results,
        totalPages: action.payload.total_pages,
      },
    });
  });

  it('TRENDING_FAILURE', () => {
    const stateBefore = {
      ...trendingInitialState,
      isLoading: true,
    };

    const action = {
      type: t.TRENDING_FAILURE,
      payload: {
        message: 'error message',
      },
    };

    expect(trendingReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLoading: false,
      error: action.payload.message,
    });
  });
});
