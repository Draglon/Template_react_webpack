import * as t from './actionTypes';

export const initialState = {
  isLoading: false,
  session_id: null,
  error: null,
};

// Authentication
export default (state = initialState, action) => {
  switch (action.type) {
    case t.ACCESS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case t.ACCESS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        session_id: action.payload,
      };
    case t.ACCESS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case t.ACCESS_REMOVE:
      localStorage.removeItem('session_id');
      return {
        isLoading: false,
        session_id: null,
        error: null,
      };
    default:
      return state;
  }
};
