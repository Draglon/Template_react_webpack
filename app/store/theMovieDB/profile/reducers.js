import * as t from './actionTypes';

export const initialState = {
  isLoading: false,
  data: {
    id: '',
  },
  error: null,
};

// User profile
export const profileReducer = (state = initialState, action) => {
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
        data: {
          id: action.payload.id,
        },
      };
    case t.PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
