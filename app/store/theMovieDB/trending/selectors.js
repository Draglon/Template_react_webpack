export const getTrending = state => {
  const trending = state.reducers.trending.data;
  const entities = state.reducers.data.movies;
  const results = Object.assign([], entities).filter(item => trending.results.includes(item.id));

  return (
    trending.results && {
      ...trending,
      results,
    }
  );
};
