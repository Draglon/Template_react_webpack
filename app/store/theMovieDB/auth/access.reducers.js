import {
  accessTypeRequest,
  accessTypeSuccess,
  accessTypeFailure,
  accessTypeRemove,
} from './access.actions';

export const initialState = {
  isLoading: false,
  session_id: null,
  error: null,
};

// Authentication
export default (state = initialState, action) => {
  switch (action.type) {
    case accessTypeRequest():
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case accessTypeSuccess():
      localStorage.setItem('session_id', action.payload.session_id);
      return {
        ...state,
        isLoading: false,
        session_id: action.payload.session_id,
      };
    case accessTypeFailure():
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    case accessTypeRemove():
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
