import React from 'react';
import configureStore from 'redux-mock-store';
import { Modal } from 'antd';

import CreateListModalContainer from '../container';

const spy = jest.spyOn(Modal, 'confirm');

describe('<CreateListModalContainer />', () => {
  const store = configureStore()({});
  const props = {};

  const wrapper = shallow(<CreateListModalContainer store={store} {...props} />);
  const container = wrapper.dive();
  const instance = container.instance();

  describe('showModal()', () => {
    it('dispatches the showModal()', () => {
      // instance.showModal();
      // expect(spy).toHaveBeenCalledWith();
    });
  });

  it('Render snapshot - CreateListModalContainer', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
