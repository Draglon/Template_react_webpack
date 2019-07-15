import React from 'react';
import configureStore from 'redux-mock-store';
import { Modal } from 'antd';

import DeleteItemModalContainer from '../container';

describe('<DeleteItemModalContainer />', () => {
  const store = configureStore()({});
  const props = {
    title: 'some title',
    params: { movieId: 9999 },
    onConfirm: () => {
      Modal.confirm({
        title: 'some title',
        onOk() {},
      });
    },
  };

  const wrapper = shallow(<DeleteItemModalContainer store={store} {...props} />);
  const container = wrapper.dive();
  const instance = container.instance();

  describe('showModal()', () => {
    it('dispatches the showModal()', () => {
      // instance.showModal();

      // expect(instance.showModal()).toHaveBeenCalledWith();
    });
  });

  it('Render snapshot - DeleteItemModalContainer', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
