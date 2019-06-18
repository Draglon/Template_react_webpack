import {
  createListTypeRequest,
  createListTypeSuccess,
  createListTypeFailure,
} from './list.actions';

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
    case createListTypeRequest():
      return {
        isLoading: true,
        data: {
          list_id: null,
          message: null,
        },
        error: null,
      };
    case createListTypeSuccess():
      localStorage.setItem('list_id', action.payload.list_id);
      return {
        ...state,
        isLoading: false,
        data: {
          list_id: action.payload.list_id,
          message: action.payload.status_message,
        },
      };
    case createListTypeFailure():
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
