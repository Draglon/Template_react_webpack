import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import PrivateRouteComponent from '../component';

describe('<PrivateRouteComponent />', () => {
  let wrapper;
  const location = '/dashboard';
  let props = {
    component: () => <h1>Hyperspace tracker</h1>,
    path: location,
  };

  it('Render snapshot - isLogged true and check redirect path', () => {
    props = {
      ...props,
      isLogged: 'some sessionId',
    };
    wrapper = shallow(<PrivateRouteComponent {...props} />);
    const ComponentToRender = wrapper.prop('render');
    const componentWrapper = shallow(<ComponentToRender />);

    expect(componentWrapper.props()).toEqual({});
    expect(wrapper).toMatchSnapshot();
    expect(componentWrapper).toMatchSnapshot();
  });

  it('Render snapshot - isLogged false and check redirect path', () => {
    props = {
      ...props,
      isLogged: '',
    };
    wrapper = shallow(<PrivateRouteComponent {...props} />);
    const ComponentToRender = wrapper.prop('render');
    const redirectWrapper = shallow(<ComponentToRender location={location} />);

    expect(redirectWrapper.find(Redirect).props()).toEqual({
      push: false,
      to: {
        pathname: '/',
        state: { from: location },
      },
    });
    expect(wrapper).toMatchSnapshot();
    expect(redirectWrapper).toMatchSnapshot();
  });
});
