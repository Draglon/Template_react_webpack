export const getWatchlist = state => {
  const watchlist = state.reducers.watchlist.data;
  const entities = state.reducers.data.movies;
  const results = Object.assign([], entities).filter(item => watchlist.results.includes(item.id));

  return (
    watchlist.results && {
      ...watchlist,
      results,
    }
  );
};
