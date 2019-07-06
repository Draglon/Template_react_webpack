export const getAccountId = state => state.reducers.profile.data.id;

export const getProfileById = state => {
  const { id } = state.reducers.profile.data;
  return state.reducers.data.profile[id];
};
