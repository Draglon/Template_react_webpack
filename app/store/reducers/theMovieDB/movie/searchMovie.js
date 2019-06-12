import {
  SEARCH_MOVIE_REQUEST,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILURE,
} from '../../../constants/movie.constants';

const searchMovieInitialState = {
  isPending: false,
  data: null,
  error: null,
};

// Search Movie Reducer
const searchMovieReducer = (state = searchMovieInitialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE_REQUEST:
      return {
        ...state,
        isPending: true,
        error: null,
      };
    case SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        isPending: false,
        data: action.payload,
        error: null,
      };
    case SEARCH_MOVIE_FAILURE:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searchMovieReducer;
