import React from 'react';
import { Modal } from 'antd';

import DeleteItemModalComponent from '../component';

describe('<DeleteItemModalComponent />', () => {
  let component;
  const props = {
    type: 'some type',
    showModal: () => {
      Modal.confirm({
        title: 'some title',
        onOk: () => {},
      });
    },
  };

  it('should match snapshot', () => {
    component = shallow(<DeleteItemModalComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
