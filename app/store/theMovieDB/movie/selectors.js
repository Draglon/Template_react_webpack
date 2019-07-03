export const getMovie = state => state.reducers.movie.data;
export const getMovieById = (state, id) =>
  state.reducers.data.movie && state.reducers.data.movie[id];
