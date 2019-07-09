import * as t from './actionTypes';

export const initialState = {
  profile: {},
  movies: {},
  movie: {},
  genres: {},
  cast: {},
  crew: {},
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_ENTITIES:
      return {
        ...state,
        ...action.entities,
        movies: {
          ...state.movies,
          ...action.entities.movies,
        },
        movie: {
          ...state.movie,
          ...action.entities.movie,
        },
        genres: {
          ...state.genres,
          ...action.entities.genres,
        },
        cast: {
          ...state.cast,
          ...action.entities.cast,
        },
        crew: {
          ...state.crew,
          ...action.entities.crew,
        },
      };
    default:
      return state;
  }
};
