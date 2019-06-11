import {
  AUTH_SESSION_WITH_LOGIN_REQUEST,
  AUTH_SESSION_WITH_LOGIN_SUCCESS,
  AUTH_SESSION_WITH_LOGIN_FAILURE,
} from '../../../constants/authentication.constants';

const authSessionWithLoginInitialState = {
  isPending: false,
  data: null,
  error: null,
};

// Movie
const authSessionWithLoginReducer = (state = authSessionWithLoginInitialState, action) => {
  switch (action.type) {
    case AUTH_SESSION_WITH_LOGIN_REQUEST:
      return {
        ...state,
        isPending: true,
        error: null,
      };
    case AUTH_SESSION_WITH_LOGIN_SUCCESS:
      return {
        ...state,
        isPending: false,
        data: action.payload,
        error: null,
      };
    case AUTH_SESSION_WITH_LOGIN_FAILURE:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authSessionWithLoginReducer;
