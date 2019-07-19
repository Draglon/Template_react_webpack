import React from 'react';
import configureStore from 'redux-mock-store';

import { addToWatchlistRequest } from '../../../../../store/theMovieDB/watchlist/actions';

import WatchlistIconComponent from '../container';

describe('<WatchlistIconComponent />', () => {
  const movieId = 8493834;
  const watchlist = false;

  const props = { movieId, watchlist };
  const store = configureStore()({});
  store.dispatch = jest.fn();

  const wrapper = shallow(<WatchlistIconComponent store={store} {...props} />);
  const container = wrapper.dive();
  const instance = container.instance();

  describe('handleWatchlist()', () => {
    it('dispatches the handleWatchlist()', () => {
      instance.handleWatchlist();
      expect(store.dispatch).toHaveBeenCalledWith(
        addToWatchlistRequest({ movieId, watchlist: !watchlist }),
      );
    });
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
