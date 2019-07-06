export const getSearchById = state => {
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
