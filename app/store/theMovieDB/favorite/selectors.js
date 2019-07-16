export const getFavorite = state => {
  const favorite = state.reducers.favoriteList.data;
  const entities = state.reducers.data.movies;
  const results = Object.assign([], entities).filter(item => favorite.results.includes(item.id));

  return (
    favorite.results && {
      ...favorite,
      results,
    }
  );
};
