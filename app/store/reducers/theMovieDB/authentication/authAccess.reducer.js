import {
  AUTH_ACCESS_REQUEST,
  AUTH_ACCESS_SUCCESS,
  AUTH_ACCESS_FAILURE,
} from '../../../constants/authentication.constants';

const authAccessInitialState = {
  isPending: false,
  data: null,
  error: null,
};

// Movie
const authAccessReducer = (state = authAccessInitialState, action) => {
  switch (action.type) {
    case AUTH_ACCESS_REQUEST:
      return {
        ...state,
        isPending: true,
        error: null,
      };
    case AUTH_ACCESS_SUCCESS:
      return {
        ...state,
        isPending: false,
        data: action.payload,
        error: null,
      };
    case AUTH_ACCESS_FAILURE:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authAccessReducer;
