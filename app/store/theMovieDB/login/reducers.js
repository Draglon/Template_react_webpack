import * as t from './actionTypes';
import { getCookie } from '../../../helpers/cookie';

export const loginInitialState = {
  isLoading: false,
  sessionId: getCookie('sessionId'),
  error: null,
};

export const loginReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case t.CREATE_SESSION_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case t.CREATE_SESSION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        sessionId: action.payload,
      };
    case t.CREATE_SESSION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case t.DELETE_SESSION_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case t.DELETE_SESSION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        sessionId: action.payload,
      };
    case t.DELETE_SESSION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
