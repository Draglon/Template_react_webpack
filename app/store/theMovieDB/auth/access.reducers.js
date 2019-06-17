import {
  type,
  accessTypeRequest,
  accessTypeSuccess,
  accessTypeFailure,
  accessTypeRemove,
} from './access.actions';

const authAccessInitialState = {
  session_id: null,
  error: null,
};

// Movie
const authAccessReducer = (state = authAccessInitialState, action) => {
  switch (action.type) {
    case type.ACCESS_REQUEST:
      return {
        ...state,
        error: null,
      };
    case type.ACCESS_SUCCESS:
      localStorage.setItem('session_id', action.payload);
      return {
        ...state,
        session_id: action.payload,
        error: null,
      };
    case type.ACCESS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case accessTypeRemove():
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
