import * as t from './actionTypes';

export const movieInitialState = {
  isLoading: false,
  data: null,
  error: null,
};

// Movie
export const movieReducer = (state = movieInitialState, action) => {
  switch (action.type) {
    case t.MOVIE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case t.MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case t.MOVIE_FAILURE:
      return {
        isLoading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
