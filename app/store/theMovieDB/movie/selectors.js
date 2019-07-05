export const getMovieById = (state, id) => {
  const movie = state.reducers.data.movie;
  return movie && movie[id];
};

export const getGenresById = (state, id) => {
  const movie = state.reducers.data.movie[id];
  const genres = state.reducers.data.genres;
  return movie && movie.genres.map(item => genres[item]);
};

export const getCastById = (state, id) => {
  const movie = state.reducers.data.movie[id];
  const cast = state.reducers.data.cast;
  return movie && movie.cast.map(item => cast[item]);
};

export const getCrewById = (state, id) => {
  const movie = state.reducers.data.movie[id];
  const crew = state.reducers.data.crew;
  return movie && movie.crew.map(item => crew[item]);
};
