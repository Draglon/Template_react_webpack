import * as t from './actionTypes';

export const initialState = {
  isLoading: false,
  error: null,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.MOVIE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case t.MOVIE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
