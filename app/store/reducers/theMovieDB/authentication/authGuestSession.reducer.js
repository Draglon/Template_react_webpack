import {
  AUTH_GUEST_SESSION_REQUEST,
  AUTH_GUEST_SESSION_SUCCESS,
  AUTH_GUEST_SESSION_FAILURE,
} from '../../../constants/authGuestSession.constants';

const authGuestSessionInitialState = {
  isPending: false,
  data: null,
  error: null,
};

// Movie
const authGuestSessionReducer = (state = authGuestSessionInitialState, action) => {
  switch (action.type) {
    case AUTH_GUEST_SESSION_REQUEST:
      return {
        ...state,
        isPending: true,
        error: null,
      };
    case AUTH_GUEST_SESSION_SUCCESS:
      return {
        ...state,
        isPending: false,
        data: action.payload,
        error: null,
      };
    case AUTH_GUEST_SESSION_FAILURE:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authGuestSessionReducer;
