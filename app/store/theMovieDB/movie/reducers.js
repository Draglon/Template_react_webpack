import * as t from './actionTypes';

export const movieInitialState = {
  isLoading: false,
  data: {
    id: 0,
    title: '',
    overview: '',
    budget: 0,
    genres: [],
    revenue: 0,
    runtime: 0,
    language: '',
    credits: {
      cast: [],
      crew: [],
    },
    images: {
      backdrops: [],
      posters: [],
    },
  },
  error: null,
};

// Movie
export const movieReducer = (state = movieInitialState, action) => {
  switch (action.type) {
    case t.MOVIE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case t.MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          id: action.payload.id,
          title: action.payload.title,
          overview: action.payload.overview,
          budget: action.payload.budget,
          genres: action.payload.genres,
          revenue: action.payload.revenue,
          runtime: action.payload.runtime,
          language: action.payload.language,
          credits: {
            cast: action.payload.cast,
            crew: action.payload.crew,
          },
          images: {
            backdrops: action.payload.backdrops,
            posters: action.payload.posters,
          },
        },
      };
    case t.MOVIE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
