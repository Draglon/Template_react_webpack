// eslint-disable-next-line import/prefer-default-export
export const getTrendingById = state => {
  const results = state.reducers.trending.data.results;
  const entities = state.reducers.data.movies;
  const trending = state.reducers.trending.data;

  console.log("results", results);
  console.log("entities", entities);
  console.log("trending", trending);

  return (
    entities && {
      ...trending,
      results: results.map(item => entities[item]),
    }
  );
};
