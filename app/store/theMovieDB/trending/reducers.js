import * as t from './actionTypes';

export const trendingInitialState = {
  isLoading: false,
  data: {
    page: 1,
    results: [],
    totalPages: 0,
  },
  error: null,
};

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
        data: {
          page: action.payload.page,
          results: action.payload.results,
          totalPages: action.payload.total_pages,
        },
      };
    case t.TRENDING_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
