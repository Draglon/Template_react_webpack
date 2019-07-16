import React from 'react';
import { Modal } from 'antd';

import CreateListModalComponent from '../component';

describe('<CreateListModalComponent />', () => {
  let component;
  let props = {
    modalVisible: true,
    showModal: () => {},
    hideModal: () => {},
    onSubmit: () => {},
  };

  it('Render snapshot - with icon and modalVisible true', () => {
    props = {
      ...props,
      modalVisible: true,
      icon: 'some icon text',
    };
    component = shallow(<CreateListModalComponent {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('Render snapshot - with icon and modalVisible false', () => {
    props = {
      ...props,
      modalVisible: false,
      icon: 'some icon text',
    };
    component = shallow(<CreateListModalComponent {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('Render snapshot - with button and modalVisible true', () => {
    props = {
      ...props,
      modalVisible: true,
      text: 'some text',
    };
    component = shallow(<CreateListModalComponent {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('Render snapshot - with button and modalVisible false', () => {
    props = {
      ...props,
      modalVisible: false,
      text: 'some text',
    };
    component = shallow(<CreateListModalComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
