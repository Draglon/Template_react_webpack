import * as t from './actionTypes';

export const searchInitialState = {
  isLoading: false,
  data: {
    query: '',
    page: 1,
    results: [],
    totalPages: 0,
  },
  error: null,
};

// Search movie
export const searchReducer = (state = searchInitialState, action) => {
  switch (action.type) {
    case t.SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case t.SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          query: action.payload.query,
          page: action.payload.page,
          results: action.payload.results,
          totalPages: action.payload.totalPages,
        },
      };
    case t.SEARCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
