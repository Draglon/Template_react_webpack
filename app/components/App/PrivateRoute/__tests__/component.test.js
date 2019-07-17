import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import PrivateRouteComponent from '../component';

describe('<PrivateRouteComponent />', () => {
  const location = '/dashboard';
  const props = {
    component: () => <h1>Hyperspace tracker</h1>,
    path: location,
    sessionId: '',
  };

  const wrapper = shallow(<PrivateRouteComponent {...props} />);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Without sessionId', () => {
    beforeEach(() => {
      wrapper.setProps(props);
    });

    it('should check redirect path', () => {
      const rendered = wrapper.renderProp('render')({ location });
      expect(rendered.find(Redirect).props()).toEqual({
        push: false,
        to: {
          pathname: '/',
          state: { from: location },
        },
      });
    });

    it('should match snapshot', () => {
      const rendered = wrapper.renderProp('render')({ location });
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('With sessionId', () => {
    const newProps = {
      ...props,
      sessionId: 'some sessionId',
    };

    beforeEach(() => {
      wrapper.setProps(newProps);
    });

    it('should match snapshot', () => {
      const rendered = wrapper.renderProp('render')();
      expect(rendered).toMatchSnapshot();
    });
  });
});
