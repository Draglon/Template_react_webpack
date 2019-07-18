import React from 'react';
import configureStore from 'redux-mock-store';
import { movieRequest } from '../../../store/theMovieDB/movie/actions';
import MovieContainer from '../container';

describe('<MovieContainer />', () => {
  const id = 9999;
  const props = {
    match: {
      params: {
        id,
      },
    },
  };
  const state = {
    reducers: {
      data: {
        movie: {
          [id]: {
            id,
            genres: [1, 2, 3],
            cast: [1, 2, 3],
            crew: [1, 2, 3],
          },
        },
        genres: {
          1: { id: 1, name: 'name' },
          2: { id: 2, name: 'name' },
        },
        cast: {
          1: { id: 1, name: 'name', character: 'character' },
          2: { id: 2, name: 'name', character: 'character' },
        },
        crew: {
          1: { id: 1, name: 'name', job: 'position' },
          2: { id: 2, name: 'name', job: 'position' },
        },
      },
    },
  };

  const store = configureStore()(state);
  store.dispatch = jest.fn();

  const wrapper = shallow(<MovieContainer store={store} {...props} />);
  const container = wrapper.dive();
  const instance = container.instance();

  describe('componentDidMount()', () => {
    it('dispatches the `movieRequest()`', () => {
      instance.componentDidMount();
      expect(store.dispatch).toHaveBeenCalledWith(movieRequest({ movieId: id }));
    });
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
