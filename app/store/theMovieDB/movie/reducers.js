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

export const creditsInitialState = {
  isLoading: false,
  data: null,
  error: null,
};

// Movie Credits
export const movieCreditsReducer = (state = creditsInitialState, action) => {
  switch (action.type) {
    case t.CREDITS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case t.CREDITS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case t.CREDITS_FAILURE:
      return {
        isLoading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const movieImagesInitialState = {
  isLoading: false,
  data: null,
  error: null,
};

// Movie Credits
export const movieImagesReducer = (state = movieImagesInitialState, action) => {
  switch (action.type) {
    case t.MOVIE_IMAGES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case t.MOVIE_IMAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case t.MOVIE_IMAGES_FAILURE:
      return {
        isLoading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
