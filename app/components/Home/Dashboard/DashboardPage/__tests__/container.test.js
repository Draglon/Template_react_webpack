import React from 'react';
import configureStore from 'redux-mock-store';

import { searchRequest } from '../../../../../store/theMovieDB/search/actions';
import { trendingRequest } from '../../../../../store/theMovieDB/trending/actions';

import DashboardPageContainer from '../container';

describe('DashboardPageContainer', () => {
  const id = 8493834;
  const data = {
    page: 1,
    results: [1, 2, 3],
    totalPages: 10,
  };
  const state = {
    reducers: {
      trending: {
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
  const wrapper = shallow(<DashboardPageContainer store={store} />);
  const container = wrapper.dive();
  const instance = container.instance();

  describe('componentDidMount()', () => {
    it('dispatches the trendingRequest()', () => {
      instance.componentDidMount();
      expect(store.dispatch).toHaveBeenCalledWith(trendingRequest({ page: 1 }));
    });
  });

  describe('getPage()', () => {
    it('dispatches the getPage()', () => {
      instance.getPage(10);
      expect(store.dispatch).toHaveBeenCalledWith(trendingRequest({ page: 10 }));
    });
  });

  describe('onSearch()', () => {
    it('dispatches the onSearch()', () => {
      const query = 'search string';
      instance.onSearch(query);
      expect(store.dispatch).toHaveBeenCalledWith(searchRequest({ query, page: 1 }));
      expect(store.dispatch).toHaveBeenCalledWith(trendingRequest({ page: 1 }));
    });
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
