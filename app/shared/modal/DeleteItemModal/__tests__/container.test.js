import React from 'react';
import configureStore from 'redux-mock-store';
import { Modal } from 'antd';

import DeleteItemModalContainer from '../container';

const spy = jest.spyOn(Modal, 'confirm');

describe('<DeleteItemModalContainer />', () => {
  const props = {
    title: 'some title',
    params: { movieId: 9999 },
    onConfirm: jest.fn(),
  };

  const store = configureStore()({});
  store.dispatch = jest.fn();
  const wrapper = shallow(<DeleteItemModalContainer store={store} {...props} />);
  const container = wrapper;
  const instance = container.instance();

  describe('showModal()', () => {
    it('dispatches the showModal()', () => {
      instance.showModal();

      expect(spy).toHaveBeenCalledWith({
        title: props.title,
        onOk: expect.any(Function),
      });
    });
  });

  describe('onConfirm()', () => {
    it('dispatches the onConfirm()', () => {
      instance.onOk();

      expect(props.onConfirm).toHaveBeenCalledWith(props.params);
    });
  });

  it('Render snapshot - DeleteItemModalContainer', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
