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
    component = shallow(<PrivateRouteComponent {...props} isLogged />);
    // console.log(component.prop('render')());
    expect(toJson(component)).toMatchSnapshot();
  });

  it('Render property - with isLogged false', () => {
    component = shallow(<PrivateRouteComponent {...props} isLogged={false} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
