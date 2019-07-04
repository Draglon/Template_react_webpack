import React from 'react';
import configureStore from 'redux-mock-store';

import DashboardContainer from '../container';

describe('DashboardContainer', () => {
  const mockStore = configureStore();
  const mockFetchTrendingRequest = jest.fn();
  const mockFetchSearchRequest = jest.fn();
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
    trendingRequest: mockFetchTrendingRequest,
    searchRequest: mockFetchSearchRequest,
    trending: {},
    search: {},
  };

  const store = mockStore(state);
  const container = shallow(<DashboardContainer store={store} {...props} />);
  const instance = container.instance();
  // const spy = jest.spyOn(instance.props, 'trendingRequest');
  instance.componentDidMount();
  // console.log(instance.props.trendingRequest(jest.fn()));

  it('dispatches the `trendingRequest()`', () => {
    // expect(instance.props.trendingRequest).toHaveBeenCalledWith({ page: 1 });
    // expect(spy).toHaveBeenCalledTimes(1);
    // expect(spy).toHaveBeenCalled();
  });
});
