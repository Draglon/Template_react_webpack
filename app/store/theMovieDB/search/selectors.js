// eslint-disable-next-line import/prefer-default-export
export const getSearchById = state => {
  if (state.reducers.search.data.results) {
    return {
      ...state.reducers.search.data,
      results: state.reducers.search.data.results.map(item => state.reducers.data.movies[item]),
    };
  }
};
