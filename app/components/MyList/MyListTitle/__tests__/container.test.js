import React from 'react';
import configureStore from 'redux-mock-store';

import { deleteListRequest } from '../../../../store/theMovieDB/myLists/actions';
import MyListsTitleContainer from '../container';

describe('<MyListsTitleContainer />', () => {
  const id = 8493834;
  const props = {
    history: {},
  };
  const state = {
    reducers: {
      // detailsList: {
      //   data: {
      //     id: 1,
      //     title: 'List 1',
      //     description: 'description',
      //     results: [1, 2, 3],
      //     total: 23,
      //   },
      // },
      // data: {
      //   movies: {
      //     1: { id: 1, title: 'title', overview: 'overview', poster_path: 'path' },
      //     2: { id: 2, title: 'title', overview: 'overview', poster_path: 'path' },
      //   },
      // },
    },
  };

  const store = configureStore()(state);
  store.dispatch = jest.fn();
  const wrapper = shallow(<MyListsTitleContainer store={store} {...props} />);
  const container = wrapper.dive();
  const instance = container.instance();

  // describe('modalParams()', () => {
  //   it('dispatches the modalParams()', () => {
  //     instance.modalParams();
  //     expect(store.dispatch).toHaveBeenCalledWith({
  //       title: 'Do you want to delete list?',
  //       onConfirm: this.onConfirm,
  //     });
  //   });
  // });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
