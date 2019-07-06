import * as t from './actionTypes';

export const initialState = {
  isLoading: false,
  data: {
    query: '',
    page: 1,
    results: [],
    totalPages: 0,
  },
  error: null,
};

export const searchReducer = (state = initialState, action) => {
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
          totalPages: action.payload.total_pages,
        },
      };
    case t.SEARCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: {
          query: '',
          page: 1,
          results: [],
          totalPages: 0,
        },
        error: action.payload.message,
      };
    default:
      return state;
  }
};
