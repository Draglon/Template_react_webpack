import * as t from './actionTypes';

export const searchInitialState = {
  isLoading: false,
  data: {
    query: '',
    pages: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
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
        data: action.payload,
      };
    case t.SEARCH_FAILURE:
      return {
        isLoading: false,
        data: {
          query: '',
          pages: 1,
          results: [],
          total_pages: 0,
          total_results: 0,
        },
        error: action.payload,
      };
    default:
      return state;
  }
};
