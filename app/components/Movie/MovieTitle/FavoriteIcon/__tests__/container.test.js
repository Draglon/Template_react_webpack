import React from 'react';
import configureStore from 'redux-mock-store';

import { addToFavoriteRequest } from '../../../../../store/theMovieDB/favorite/actions';

import FavoriteIconContainer from '../container';

describe('<FavoriteIconContainer />', () => {
  const movieId = 8493834;
  const favorite = false;

  const props = { movieId, favorite };
  const store = configureStore()({});
  store.dispatch = jest.fn();

  const wrapper = shallow(<FavoriteIconContainer store={store} {...props} />);
  const container = wrapper.dive();
  const instance = container.instance();

  describe('handleFavorite()', () => {
    it('dispatches the handleFavorite()', () => {
      instance.handleFavorite();
      expect(store.dispatch).toHaveBeenCalledWith(
        addToFavoriteRequest({ movieId, favorite: !favorite }),
      );
    });
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
