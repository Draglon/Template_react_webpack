import * as t from './actionTypes';

export const initialState = {
  isLoading: false,
  data: {},
  error: null,
};

export const createListReducer = (state = initialState, action) => {
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
          list_id: action.payload.list_id,
          message: action.payload.status_message,
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
