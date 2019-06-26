import * as t from './actionTypes';

export const createListInitialState = {
  isLoading: false,
  data: {
    list_id: null,
    message: null,
  },
  error: null,
};

// Create List
export const createListReducer = (state = createListInitialState, action) => {
  switch (action.type) {
    case t.CREATE_LIST_REQUEST:
      return {
        ...createListInitialState,
        isLoading: true,
        error: null,
      };
    case t.CREATE_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          list_id: action.payload.list_id,
          message: action.payload.status_message,
        },
      };
    case t.CREATE_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
