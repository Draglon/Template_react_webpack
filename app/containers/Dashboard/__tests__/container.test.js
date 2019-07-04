import React from 'react';
import configureStore from 'redux-mock-store';

import { trendingRequest } from '../../../store/theMovieDB/trending/actions';
import DashboardContainer from '../container';

describe('DashboardContainer', () => {
  const mockStore = configureStore();
  const state = {
    reducers: {
      trending: {
        data: {
          page: 1,
          results: [],
          totalPages: 1000,
        },
      },
      search: {
        data: {
          query: '',
          page: 1,
          results: [],
          totalPages: 20,
        },
      },
    },
  };
  const props = {
    // trendingRequest: mockFetchTrendingRequest,
    // searchRequest: mockFetchSearchRequest,
    // trending: {},
    // search: {},
  };

  const store = mockStore(state);
  store.dispatch = jest.fn();

  const wrapper = shallow(<DashboardContainer store={store} {...props} />);
  const container = wrapper.dive();
  const instance = container.instance();

  describe('componentDidMount()', () => {
    it('dispatches the `trendingRequest()`', () => {
      instance.componentDidMount();

      expect(store.dispatch).toHaveBeenCalledWith(trendingRequest({ page: 1 }));
    });
  });
});
