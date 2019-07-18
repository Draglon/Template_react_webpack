import React from 'react';

import CreateListModalComponent from '../component';

describe('<CreateListModalComponent />', () => {
  const props = {
    modalVisible: true,
    showModal: () => {},
    hideModal: () => {},
    onSubmit: () => {},
  };

  const component = shallow(<CreateListModalComponent {...props} />);

  describe('with icon and modalVisible true', () => {
    it('should match snapshot', () => {
      const newProps = {
        ...props,
        icon: 'some icon text',
      };
      component.setProps(newProps);
      expect(component).toMatchSnapshot();
    });
  });

  describe('with icon and modalVisible false', () => {
    it('should match snapshot', () => {
      const newProps = {
        ...props,
        modalVisible: false,
        icon: 'some icon text',
      };
      component.setProps(newProps);
      expect(component).toMatchSnapshot();
    });
  });

  describe('with button and modalVisible true', () => {
    it('should match snapshot', () => {
      const newProps = {
        ...props,
        modalVisible: true,
        text: 'some text',
      };
      component.setProps(newProps);
      expect(component).toMatchSnapshot();
    });
  });

  describe('with button and modalVisible false', () => {
    it('should match snapshot', () => {
      const newProps = {
        ...props,
        modalVisible: false,
        text: 'some text',
      };
      component.setProps(newProps);
      expect(component).toMatchSnapshot();
    });
  });
});
