import * as t from './actionTypes';

export const initialState = {
  isLoading: false,
  data: {
    page: 1,
    results: [],
    totalPages: 0,
    totalResults: 0,
  },
  error: null,
};

export const createFavoriteListReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.FAVORITE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case t.FAVORITE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          page: action.payload.page,
          results: action.payload.results,
          totalPages: action.payload.total_pages,
          totalResults: action.payload.total_results,
        },
      };
    case t.FAVORITE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export const addFavoriteInitialState = {
  isLoading: false,
  data: {
    message: '',
  },
  error: null,
};

export const addToFavoriteReducer = (state = addFavoriteInitialState, action) => {
  switch (action.type) {
    case t.ADD_TO_FAVORITE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case t.ADD_TO_FAVORITE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          message: action.payload.status_message,
        },
      };
    case t.ADD_TO_FAVORITE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
