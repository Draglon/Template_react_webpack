import React from 'react';
import configureStore from 'redux-mock-store';

import { profileRequest } from '../../../store/theMovieDB/profile/actions';
import HeaderContainer from '../container';

describe('<HeaderContainer />', () => {
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
    profile: profileData,
  };

  const store = configureStore()(state);
  store.dispatch = jest.fn();

  const wrapper = shallow(<HeaderContainer store={store} {...props} />);
  const container = wrapper.dive();
  const instance = container.instance();

  describe('componentDidMount()', () => {
    it('dispatches the profileRequest()', () => {
      instance.componentDidMount();

      expect(store.dispatch).toHaveBeenCalledWith(profileRequest());
    });
  });

  describe('Render snapshot', () => {
    it('HeaderContainer', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
