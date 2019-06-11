import {
  AUTH_TOKEN_REQUEST,
  AUTH_TOKEN_SUCCESS,
  AUTH_TOKEN_FAILURE,
} from '../../../constants/authentication.constants';

const authTokenInitialState = {
  isPending: false,
  data: null,
  error: null,
};

// Movie
const authTokenReducer = (state = authTokenInitialState, action) => {
  switch (action.type) {
    case AUTH_TOKEN_REQUEST:
      return {
        ...state,
        isPending: true,
        error: null,
      };
    case AUTH_TOKEN_SUCCESS:
      return {
        ...state,
        isPending: false,
        data: action.payload,
        error: null,
      };
    case AUTH_TOKEN_FAILURE:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authTokenReducer;
