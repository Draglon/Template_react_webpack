import React from 'react';
import { Route, Redirect } from 'react-router';
import toJson from 'enzyme-to-json';

import PrivateRouteComponent from '../component';

describe('<PrivateRouteComponent /> component', () => {
  let component;
  const props = {
    component: () => <>Component</>,
    path: '/',
  };

  it('Render property - with isLogged true', () => {
    component = shallow(<PrivateRouteComponent {...props} isLogged="" />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('Render property - with isLogged false', () => {
    component = shallow(<PrivateRouteComponent {...props} isLogged="some sessionId" />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
