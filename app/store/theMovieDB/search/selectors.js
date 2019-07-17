export const getSearchQuery = state => state.reducers.search.data.query;
export const getSearch = state => {
  const search = state.reducers.search.data;
  const entities = state.reducers.data.movies;
  const results = Object.assign([], entities).filter(item => search.results.includes(item.id));

  return (
    search.results && {
      ...search,
      results,
    }
  );
};
