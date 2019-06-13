import {
  CREATE_LIST_REQUEST,
  CREATE_LIST_SUCCESS,
  CREATE_LIST_FAILURE,
} from '../../../constants/list.constants';

const createListInitialState = {
  isPending: false,
  data: null,
  error: null,
};

// Create List
const createListReducer = (state = createListInitialState, action) => {
  switch (action.type) {
    case CREATE_LIST_REQUEST:
      return {
        ...state,
        isPending: true,
        error: null,
      };
    case CREATE_LIST_SUCCESS:
      return {
        ...state,
        isPending: false,
        data: action.payload,
        error: null,
      };
    case CREATE_LIST_FAILURE:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default createListReducer;
