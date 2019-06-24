import * as t from './actionTypes';

export const authAccessInitialState = {
  isLoading: false,
  session_id: null,
  error: null,
};

// Authentication
export const authAccessReducer = (state = authAccessInitialState, action) => {
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
    default:
      return state;
  }
};

export const AccessSessionInitialState = {
  accessSession: false,
};

// Authentication - localstorage session
export const sessionAccessReducer = (state = AccessSessionInitialState, action) => {
  switch (action.type) {
    case t.ACCESS_ADD:
      return {
        accessSession: true,
      };
    case t.ACCESS_REMOVE:
      localStorage.removeItem('session_id');
      return {
        accessSession: false,
      };
    default:
      return state;
  }
};
