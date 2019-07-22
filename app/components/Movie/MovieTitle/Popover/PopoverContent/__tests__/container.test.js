import React from 'react';
import configureStore from 'redux-mock-store';

import { createdListsRequest } from '../../../../../../store/theMovieDB/myLists/actions';

import PopoverContentComponent from '../container';

describe('<PopoverContentComponent />', () => {
  const props = {
    closePopover: () => {},
    movieId: 999,
  };
  const state = {
    reducers: {
      lists: {
        data: {
          results: [1, 2],
        },
      },
      data: {
        lists: {
          1: { id: 1, name: 'List 1' },
          2: { id: 2, name: 'List 2' },
        },
      },
    },
  };

  const store = configureStore()(state);
  store.dispatch = jest.fn();

  const wrapper = shallow(<PopoverContentComponent store={store} {...props} />);
  const container = wrapper.dive();
  const instance = container.instance();

  describe('componentDidMount()', () => {
    it('dispatches the createdListsRequest()', () => {
      instance.componentDidMount();
      expect(store.dispatch).toHaveBeenCalledWith(createdListsRequest({ page: 1 }));
    });
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
