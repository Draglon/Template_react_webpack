import { getAccountId, getProfile } from '../selectors';

describe('Profile - selectors', () => {
  it('getAccountId - get account id from store', () => {
    const id = 9999;
    const state = {
      reducers: {
        profile: {
          data: {
            id,
          },
        },
      },
    };
    expect(getAccountId(state)).toEqual(id);
  });

  it('getProfile - get profile data from store', () => {
    const id = 9999;
    const data = {
      id,
      avatar: 'some image hash',
      name: 'some name',
      username: 'some username',
    };
    const state = {
      reducers: {
        profile: {
          data: {
            id,
          },
        },
        data: {
          profile: {
            9999: data,
          },
        },
      },
    };
    expect(getProfile(state)).toEqual(data);
  });
});
