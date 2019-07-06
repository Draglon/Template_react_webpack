import * as t from './actionTypes';

export const initialState = {
  isLoading: false,
  data: {},
  error: null,
};

export const createdListsReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.CREATED_LISTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case t.CREATED_LISTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case t.CREATED_LISTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
