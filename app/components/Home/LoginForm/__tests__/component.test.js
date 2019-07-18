import React from 'react';
import { Formik } from 'formik';

import LoginFormComponent from '../component';

describe('<LoginFormComponent />', () => {
  const props = {
    onSubmit: jest.fn(),
    loginError: '',
  };
  const component = shallow(<LoginFormComponent {...props} />);

  describe('request is loading', () => {
    it('should match snapshot', () => {
      const propsFormik = {
        isSubmitting: true,
      };
      const rendered = component.find(Formik).renderProp('render')(propsFormik);
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('request was complited', () => {
    it('should match snapshot', () => {
      const propsFormik = {
        isSubmitting: false,
      };
      const rendered = component.find(Formik).renderProp('render')(propsFormik);
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('fields have error', () => {
    beforeEach(() => {
      const newProps = {
        ...props,
        loginError: 'field with error',
      };
      component.setProps(newProps);
    });

    it('should match snapshot', () => {
      const propsFormik = {
        isSubmitting: false,
      };
      const rendered = component.find(Formik).renderProp('render')(propsFormik);
      expect(rendered).toMatchSnapshot();
    });
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
