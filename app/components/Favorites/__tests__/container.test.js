import React from 'react';
import configureStore from 'redux-mock-store';

import { favoriteRequest } from '../../../store/theMovieDB/favorite/actions';
import FavoritesContainer from '../container';

describe('<FavoritesContainer />', () => {
  const id = 8493834;
  const data = {
    page: 1,
    results: [1, 2, 3],
    totalPages: 10,
    totalResults: 100,
  };
  const state = {
    reducers: {
      favoriteList: {
        data,
      },
      data: {
        movies: {
          id,
        },
      },
    },
  };

  const store = configureStore()(state);
  store.dispatch = jest.fn();
  const wrapper = shallow(<FavoritesContainer store={store} />);
  const container = wrapper.dive();
  const instance = container.instance();

  describe('componentDidMount()', () => {
    it('dispatches the favoriteRequest()', () => {
      instance.componentDidMount();
      expect(store.dispatch).toHaveBeenCalledWith(favoriteRequest({ page: 1 }));
    });
  });

  describe('getPage()', () => {
    it('dispatches the getPage()', () => {
      instance.getPage(10);
      expect(store.dispatch).toHaveBeenCalledWith(favoriteRequest({ page: 10 }));
    });
  });

  it('Render snapshot - FavoritesContainer', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
