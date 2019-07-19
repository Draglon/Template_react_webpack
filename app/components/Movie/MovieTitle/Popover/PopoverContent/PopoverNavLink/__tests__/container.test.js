import React from 'react';
import configureStore from 'redux-mock-store';

import { addMovieListRequest } from '../../../../../../../store/theMovieDB/myLists/actions';

import PopoverNavLinkContainer from '../container';

describe('<PopoverNavLinkContainer />', () => {
  const listId = 99;
  const movieId = 999;
  const props = {
    closePopover: () => {},
    list: {
      id: listId,
      name: 'List 1',
    },
    movieId,
  };

  const store = configureStore()({});
  store.dispatch = jest.fn();

  const wrapper = shallow(<PopoverNavLinkContainer store={store} {...props} />);
  const container = wrapper.dive();
  const instance = container.instance();

  describe('onClick()', () => {
    it('dispatches the addMovieListRequest()', () => {
      instance.onClick();
      expect(store.dispatch).toHaveBeenCalledWith(addMovieListRequest({ listId, movieId }));
    });
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
