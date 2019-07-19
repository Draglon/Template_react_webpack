import React from 'react';
import configureStore from 'redux-mock-store';

import { createdListsRequest } from '../../../store/theMovieDB/myLists/actions';
import MyListsContainer from '../container';

describe('<MyListsContainer />', () => {
  const id = 8493834;
  const data = {
    page: 1,
    results: [1, 2, 3],
    totalPages: 10,
    totalResults: 100,
  };
  const state = {
    reducers: {
      lists: {
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
  const wrapper = shallow(<MyListsContainer store={store} />);
  const container = wrapper.dive();
  const instance = container.instance();

  describe('componentDidMount()', () => {
    it('dispatches the createdListsRequest()', () => {
      instance.componentDidMount();
      expect(store.dispatch).toHaveBeenCalledWith(createdListsRequest({ page: 1 }));
    });
  });

  describe('getPage()', () => {
    it('dispatches the createdListsRequest()', () => {
      instance.getPage(10);
      expect(store.dispatch).toHaveBeenCalledWith(createdListsRequest({ page: 10 }));
    });
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
