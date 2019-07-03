export const getProfile = state => state.reducers.account.data;
export const getProfileByID = state => {
  const { id } = state.reducers.account.data;
  return state.reducers.data.profile[id];
};
