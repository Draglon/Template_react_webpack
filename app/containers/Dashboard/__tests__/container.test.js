import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';

import ConnectedDashboardContainer, { DashboardContainer } from '../container';

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
        query: '',
        page: 1,
        results: [],
        totalPages: 20,
      },
    },
  };
  const props = {
    trendingRequest: mockFetchTrendingRequest,
    searchRequest: mockFetchSearchRequest,
  };
  // let store;
  // let container;
  // let instance;
  // let loadData;

  beforeAll(() => {
    // store = mockStore(state);
    // container = mount(<ConnectedDashboardContainer store={store} {...props} />).dive();
    // instance = container.instance();
    // loadData = jest.spyOn(instance, 'loadData');
    // instance.componentDidMount();
  });

  it('dispatches the `trendingRequest()`', () => {
    // expect(loadData).toHaveBeenCalledWith({ page: 1 });
    // expect(loadData).toHaveBeenCalledTimes(1);
    // container.unmount();
  });

  // it('+++ check action on dispatching ', () => {
  //   let action;
  //   store.dispatch(addInputs(500));
  //   store.dispatch(subtractInputs(100));
  //   action = store.getActions();
  //   expect(action[0].type).toBe("ADD_INPUTS");
  //   expect(action[1].type).toBe("SUBTRACT_INPUTS");
  // });
});
