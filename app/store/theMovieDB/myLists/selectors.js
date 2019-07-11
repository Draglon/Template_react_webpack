export const getCreatedLists = state => state.reducers.lists.data;
export const getCreateList = state => state.reducers.list.data;

export const getCreatedListsById = state => {
  const lists = state.reducers.lists.data;
  const entities = state.reducers.data.lists;
  const results = Object.assign([], entities).filter(item => lists.results.includes(item.id));

  return (
    lists.results && {
      ...lists,
      results,
    }
  );
};

export const getDetailsListById = state => {
  const detailsList = state.reducers.detailsList.data;
  const entities = state.reducers.data.movies;
  const results = Object.assign([], entities).filter(item => detailsList.results.includes(item.id));

  return (
    detailsList.results && {
      ...detailsList,
      results,
    }
  );
};
