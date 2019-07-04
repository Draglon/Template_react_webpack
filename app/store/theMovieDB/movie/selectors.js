export const getMovieById = (state, id) =>
  state.reducers.data.movie && state.reducers.data.movie[id];

export const getGenresById = (state, id) => {
  const genresId = state.reducers.data.movie && state.reducers.data.movie[id].genres;
  return state.reducers.data.genres;
};
