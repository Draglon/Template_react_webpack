import * as t from './actionTypes';

export const trendingInitialState = {
  isLoading: false,
  data: {
    pages: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  error: null,
};

// Trending movie
export const trendingReducer = (state = trendingInitialState, action) => {
  switch (action.type) {
    case t.TRENDING_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case t.TRENDING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case t.TRENDING_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
