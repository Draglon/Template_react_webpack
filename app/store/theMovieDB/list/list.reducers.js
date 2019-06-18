import {
  createListTypeRequest,
  createListTypeSuccess,
  createListTypeFailure,
} from './list.actions';

const createListInitialState = {
  list_id: null,
  error: null,
};

// Create List
const createListReducer = (state = createListInitialState, action) => {
  switch (action.type) {
    case createListTypeRequest():
      return {
        ...state,
        error: null,
      };
    case createListTypeSuccess():
      localStorage.setItem('list_id', action.payload.list_id);
      return {
        ...state,
        list_id: action.payload,
        error: null,
      };
    case createListTypeFailure():
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default createListReducer;
