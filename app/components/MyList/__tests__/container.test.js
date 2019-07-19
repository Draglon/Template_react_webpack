import React from 'react';
import configureStore from 'redux-mock-store';

import { detailsListRequest } from '../../../store/theMovieDB/myLists/actions';
import MyListContainer from '../container';

describe('<MyListContainer />', () => {
  const id = 8493834;
  const props = {
    match: {
      params: { id },
    },
  };
  const state = {
    reducers: {
      detailsList: {
        data: {
          id: 1,
          title: 'List 1',
          description: 'description',
          results: [1, 2, 3],
          total: 23,
        },
      },
      data: {
        movies: {
          1: { id: 1, title: 'title', overview: 'overview', poster_path: 'path' },
          2: { id: 2, title: 'title', overview: 'overview', poster_path: 'path' },
        },
      },
    },
  };

  const store = configureStore()(state);
  store.dispatch = jest.fn();
  const wrapper = shallow(<MyListContainer store={store} {...props} />);
  const container = wrapper.dive();
  const instance = container.instance();

  describe('componentDidMount()', () => {
    it('dispatches the detailsListRequest()', () => {
      instance.componentDidMount();
      expect(store.dispatch).toHaveBeenCalledWith(detailsListRequest({ listId: id }));
    });
  });

  describe('modalParams()', () => {
    it('should call modalParams()', () => {
      const modalParamsResult = instance.modalParams();

      expect(modalParamsResult).toEqual({
        title: 'Do you want to delete movie from this list?',
        params: { listId: id },
        onConfirm: expect.any(Function),
      });
    });
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
