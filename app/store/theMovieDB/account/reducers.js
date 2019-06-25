import * as t from './actionTypes';

export const profileInitialState = {
  isLoading: false,
  data: null,
  error: null,
};

// Authentication
export const profileReducer = (state = profileInitialState, action) => {
  switch (action.type) {
    case t.PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case t.PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case t.PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
