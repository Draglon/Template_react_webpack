import * as t from './actionTypes';

export const initialState = {
  profile: {},
  movies: {},
  movie: {},
  genres: {},
  cast: {},
  crew: {},
};

// Data
export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_ENTITIES:
      if (action.entities.movies) {
        return {
          ...state,
          movies: Object.assign(state.movies, action.entities.movies),
        };
      }
      if (action.entities.movie) {
        return {
          ...state,
          movie: Object.assign(state.movie, action.entities.movie),
          genres: Object.assign(state.genres, action.entities.genres),
          cast: Object.assign(state.cast, action.entities.cast),
          crew: Object.assign(state.crew, action.entities.crew),
        };
      }
      return {
        ...state,
        ...action.entities,
      };
    default:
      return state;
  }
};
