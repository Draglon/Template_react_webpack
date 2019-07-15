import React from 'react';
import { Route, Redirect } from 'react-router';

import PrivateRouteComponent from '../component';

describe('<PrivateRouteComponent />', () => {
  let component;
  let props = {
    component: () => <>Component</>,
    path: '/',
  };

  it('Render snapshot - with isLogged true', () => {
    props = {
      ...props,
      isLogged: '',
    };
    component = shallow(<PrivateRouteComponent {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('Render snapshot - with isLogged false', () => {
    props = {
      ...props,
      isLogged: 'some sessionId',
    };
    component = shallow(<PrivateRouteComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
