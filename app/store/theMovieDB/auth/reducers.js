import t from './actionTypes';

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
      localStorage.setItem('session_id', action.payload.session_id);
      return {
        ...state,
        isLoading: false,
        session_id: action.payload.session_id,
      };
    case t.ACCESS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
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
