import React from 'react';
import configureStore from 'redux-mock-store';

import { movieRequest } from '../../../store/theMovieDB/movie/actions';
import MovieContainer from '../container';

describe('<MovieContainer />', () => {
  const id = 9999;
  const state = {
    reducers: {
      data: {
        movie: {
          [id]: {},
        },
        genres: {
          1: { id: 1, name: 'name' },
          2: { id: 2, name: 'name' },
        },
      },
    },
  };
  const props = {
    match: {
      params: { id },
    },
  };

  const mockStore = configureStore();
  const store = mockStore(state, {
    match: {
      params: { id },
    },
  });

  const wrapper = shallow(<MovieContainer store={store} {...props} />);
  const container = wrapper.dive();
  const instance = container.instance();

  describe('componentDidMount()', () => {
    it('dispatches the `trendingRequest()`', () => {
      instance.componentDidMount();

      expect(store.dispatch).toHaveBeenCalledWith(movieRequest({ id }));
    });
  });
});
