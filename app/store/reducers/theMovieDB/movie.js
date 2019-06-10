import { MOVIE_REQUEST, MOVIE_SUCCESS, MOVIE_FAILURE } from '../../constants/movie.constants';

const movieInitialState = {
  isPending: false,
  data: null,
  error: null,
};

// Movie
const movieReducer = (state = movieInitialState, action) => {
  switch (action.type) {
    case MOVIE_REQUEST:
      return {
        ...state,
        isPending: true,
        error: null,
      };
    case MOVIE_SUCCESS:
      return {
        ...state,
        isPending: false,
        data: action.payload,
        error: null,
      };
    case MOVIE_FAILURE:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
