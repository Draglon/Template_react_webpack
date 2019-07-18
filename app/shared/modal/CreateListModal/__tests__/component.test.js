import React from 'react';
import { Formik } from 'formik';

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

  describe('reqiest is loading', () => {
    it('should match snapshot', () => {
      const propsFormik = { isSubmitting: true };
      component.find(Formik).renderProp('render')(propsFormik);
      expect(component).toMatchSnapshot();
    });
  });

  describe('reqiest was complete', () => {
    it('should match snapshot', () => {
      const propsFormik = { isSubmitting: false };
      component.find(Formik).renderProp('render')(propsFormik);
      expect(component).toMatchSnapshot();
    });
  });
});
