import React from 'react';
import configureStore from 'redux-mock-store';

import { searchRequest } from '../../../../../store/theMovieDB/search/actions';

import SearchPageContainer from '../container';

describe('SearchPageContainer', () => {
  const id = 8493834;
  const data = {
    page: 1,
    results: [1, 2, 3],
    totalPages: 10,
  };
  const state = {
    reducers: {
      search: {
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
  const wrapper = shallow(<SearchPageContainer store={store} />);
  const container = wrapper.dive();
  const instance = container.instance();

  describe('getPage()', () => {
    it('dispatches the getPage()', () => {
      instance.getPage(10);
      expect(store.dispatch).toHaveBeenCalledWith(searchRequest({ page: 10 }));
    });
  });

  describe('onSearch()', () => {
    it('dispatches the onSearch()', () => {
      const query = 'search string';
      instance.onSearch(query);
      expect(store.dispatch).toHaveBeenCalledWith(searchRequest({ query, page: 1 }));
    });
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
