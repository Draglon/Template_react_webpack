import {
  AUTH_SESSION_REQUEST,
  AUTH_SESSION_SUCCESS,
  AUTH_SESSION_FAILURE,
} from '../../../constants/authentication.constants';

const authSessionInitialState = {
  isPending: false,
  data: null,
  error: null,
};

// Movie
const authSessionReducer = (state = authSessionInitialState, action) => {
  switch (action.type) {
    case AUTH_SESSION_REQUEST:
      return {
        ...state,
        isPending: true,
        error: null,
      };
    case AUTH_SESSION_SUCCESS:
      return {
        ...state,
        isPending: false,
        data: action.payload,
        error: null,
      };
    case AUTH_SESSION_FAILURE:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authSessionReducer;
