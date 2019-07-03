export const getMovieById = (state, id) =>
  state.reducers.data.movie && state.reducers.data.movie[id];
