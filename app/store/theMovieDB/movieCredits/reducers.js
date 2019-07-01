import * as t from './actionTypes';

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
