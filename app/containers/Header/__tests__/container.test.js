import React from 'react';
import configureStore from 'redux-mock-store';

import HeaderContainer from '../container';

describe('<HeaderContainer />', () => {
  const mockStore = configureStore();
  const mockFetchSetProfile = jest.fn();
  const mockFetchRemoveSessionId = jest.fn();
  const id = 8493834;
  const profileData = {
    id,
    avatar: 'some hash',
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
          id,
        },
      },
    },
  };
  const props = {
    trendingRequest: mockFetchSetProfile,
    searchRequest: mockFetchRemoveSessionId,
    profile: profileData,
  };

  const store = mockStore(state);
  const container = shallow(<HeaderContainer store={store} {...props} />);
  const instance = container.instance();
  // const spy = jest.spyOn(instance.props, 'trendingRequest');
  instance.componentDidMount();
  // console.log(instance.props);

  it('dispatches the `trendingRequest()`', () => {
    expect(instance.props.profile).toEqual(profileData);
  });
});
