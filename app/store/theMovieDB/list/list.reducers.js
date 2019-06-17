import actions from './list.actions';

const createListInitialState = {
  list_id: null,
  error: null,
};

// Create List
const createListReducer = (state = createListInitialState, action) => {
  switch (action.type) {
    case actions.CREATE_LIST_REQUEST:
      return {
        ...state,
        error: null,
      };
    case actions.CREATE_LIST_SUCCESS:
      return {
        ...state,
        list_id: action.payload,
        error: null,
      };
    case actions.CREATE_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default createListReducer;
