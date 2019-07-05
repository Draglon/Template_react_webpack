import { denormalize } from 'normalizr';
import { schemaMovie } from '../../schema';

export const getMovieById = (state, id) => {
  const movie = state.reducers.data.movie;
  return movie && movie[id];
};

export const getGenresById = (state, id) => {
  const movie = state.reducers.data.movie;
  const genres = state.reducers.data.genres;

  return Object.assign([], denormalize(genres, schemaMovie, movie[id]));
};

export const getCastById = (state, id) => {
  const movie = state.reducers.data.movie;
  const cast = state.reducers.data.cast;

  return Object.assign([], denormalize(cast, schemaMovie, movie[id]));
};

export const getCrewById = (state, id) => {
  const movie = state.reducers.data.movie;
  const crew = state.reducers.data.crew;

  return Object.assign([], denormalize(crew, schemaMovie, movie[id]));
};
