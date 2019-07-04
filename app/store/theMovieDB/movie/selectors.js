export const getMovieById = (state, id) => {
  const movie = state.reducers.data.movie;
  return movie && movie[id];
};

export const getGenresById = (state, id) => {
  const movie = state.reducers.data.movie;
  const entities = state.reducers.data.genres;

  return movie && Object.assign([], entities).filter(item => movie[id].genres.includes(item.id));
};
