export const getProfile = state => state.reducers.account.data;
export const getProfileByID = (state, id) =>
  state.reducers.data.profile && state.reducers.data.profile[id];
