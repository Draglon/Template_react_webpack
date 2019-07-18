import React from 'react';
import configureStore from 'redux-mock-store';

import { deleteListRequest } from '../../../../store/theMovieDB/myLists/actions';
import MyListsTitleContainer from '../container';

describe('<MyListsTitleContainer />', () => {
  const props = {
    history: {},
    myList: {
      id: 1,
    },
  };

  const store = configureStore()({});
  store.dispatch = jest.fn();
  const wrapper = shallow(<MyListsTitleContainer store={store} {...props} />);
  const container = wrapper.dive();
  const instance = container.instance();

  // describe('onConfirm()', () => {
  //   it('should call onConfirm()', () => {
  //     instance.onConfirm();
  //     expect(store.dispatch).toHaveBeenCalledWith(deleteListRequest({ listId: props.myList.id }));
  //   });
  // });

  // describe('modalParams()', () => {
  //   it('should call modalParams()', () => {
  //     const modalParamsResult = instance.modalParams();

  //     expect(modalParamsResult).toEqual({
  //       title: 'Do you want to delete list?',
  //       onConfirm: expect.any(Function),
  //     });
  //   });
  // });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
