import {
  AUTH_ACCESS_REQUEST,
  AUTH_ACCESS_SUCCESS,
  AUTH_ACCESS_FAILURE,
  AUTH_ACCESS_REMOVE,
} from './access.actions';

const authAccessInitialState = {
  session_id: null,
  error: null,
};

// Movie
const authAccessReducer = (state = authAccessInitialState, action) => {
  switch (action.type) {
    case AUTH_ACCESS_REQUEST:
      return {
        ...state,
        error: null,
      };
    case AUTH_ACCESS_SUCCESS:
      return {
        ...state,
        session_id: action.payload,
        error: null,
      };
    case AUTH_ACCESS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case AUTH_ACCESS_REMOVE:
      return {
        ...state,
        session_id: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default authAccessReducer;
