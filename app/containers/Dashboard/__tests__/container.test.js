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
  let store;
  let container;
  let instance;
  let loadData;

  // beforeAll(() => {
  store = mockStore(state);
  container = mount(<DashboardContainer store={store} {...props} />).dive();
  instance = container.instance();
  console.log(instance);
  loadData = jest.mock('trendingRequest', () => {});
  instance.componentDidMount();
  // console.log(container);
  // });

  it('dispatches the `trendingRequest()`', () => {
    expect(loadData).toHaveBeenCalledWith({ page: 1 });
    expect(loadData).toHaveBeenCalledTimes(1);
    container.unmount();
  });
});
