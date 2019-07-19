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
  const container = shallow(<DeleteItemModalContainer store={store} {...props} />);
  const instance = container.instance();

  describe('showModal()', () => {
    it('should call showModal()', () => {
      instance.showModal();

      expect(spy).toHaveBeenCalledWith({
        title: props.title,
        onOk: expect.any(Function),
      });
    });
  });

  describe('onConfirm()', () => {
    it('should call onConfirm()', () => {
      instance.onOk();

      expect(props.onConfirm).toHaveBeenCalledWith(props.params);
    });
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
