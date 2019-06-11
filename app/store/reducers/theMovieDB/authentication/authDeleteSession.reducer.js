import {
  AUTH_DELETE_SESSION_REQUEST,
  AUTH_DELETE_SESSION_SUCCESS,
  AUTH_DELETE_SESSION_FAILURE,
} from '../../../constants/authentication.constants';

const authDeleteSessionInitialState = {
  isPending: false,
  data: null,
  error: null,
};

// Movie
const authDeleteSessionReducer = (state = authDeleteSessionInitialState, action) => {
  switch (action.type) {
    case AUTH_DELETE_SESSION_REQUEST:
      return {
        ...state,
        isPending: true,
        error: null,
      };
    case AUTH_DELETE_SESSION_SUCCESS:
      return {
        ...state,
        isPending: false,
        data: action.payload,
        error: null,
      };
    case AUTH_DELETE_SESSION_FAILURE:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authDeleteSessionReducer;
