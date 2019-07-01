import { getProfile } from '../selectors';

describe('Account selectors', () => {
  it('getProfile - get profile data from store', () => {
    const data = {
      id: 'some id',
      avatar: 'some image hash',
      name: 'some name',
      username: 'some username',
    };
    const state = {
      reducers: {
        account: {
          data: {
            id: data.id,
            avatar: data.avatar,
            name: data.name,
            username: data.username,
          },
        },
      },
    };
    expect(getProfile(state)).toEqual(data);
  });
});
