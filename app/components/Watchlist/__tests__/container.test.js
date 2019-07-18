import React from 'react';
import configureStore from 'redux-mock-store';

import { watchlistRequest } from '../../../store/theMovieDB/watchlist/actions';
import WatchlistContainer from '../container';

describe('<WatchlistContainer />', () => {
  const id = 8493834;
  const data = {
    page: 1,
    results: [1, 2, 3],
    totalPages: 10,
    totalResults: 100,
  };
  const state = {
    reducers: {
      watchlist: {
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
  const wrapper = shallow(<WatchlistContainer store={store} />);
  const container = wrapper.dive();
  const instance = container.instance();

  describe('componentDidMount()', () => {
    it('dispatches the watchlistRequest()', () => {
      instance.componentDidMount();
      expect(store.dispatch).toHaveBeenCalledWith(watchlistRequest({ page: 1 }));
    });
  });

  describe('getPage()', () => {
    it('dispatches the getPage()', () => {
      instance.getPage(10);
      expect(store.dispatch).toHaveBeenCalledWith(watchlistRequest({ page: 10 }));
    });
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
