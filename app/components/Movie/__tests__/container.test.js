import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { movieRequest } from '../../../store/theMovieDB/movie/actions';
import MovieContainer from '../container';

describe('<MovieContainer />', () => {
  const id = 9999;
  const params = {
    match: {
      params: { id },
    },
  };
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

  const store = configureStore([])(state, params);

  const wrapper = shallow(<MovieContainer store={store} />);
  const container = wrapper.dive();
  const instance = container.instance();

  describe('componentDidMount()', () => {
    it('dispatches the `movieRequest()`', () => {
      instance.componentDidMount();
      expect(store.dispatch).toHaveBeenCalledWith(movieRequest({ id }));
    });
  });
});
