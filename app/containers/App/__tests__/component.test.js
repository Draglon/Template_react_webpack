import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AppComponent from '../component';

describe('<AppComponent /> component', () => {
  let component;
  let props;

  it('render property - isLogged: false', () => {
    props = { isLogged: false };
    component = shallow(<AppComponent {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('render property - isLogged: true', () => {
    props = { isLogged: true };
    component = shallow(<AppComponent {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
