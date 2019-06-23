import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Home from '../component';

describe('<Home /> container', () => {
  let component;
  let props;

  it('render property - isLogged: false', () => {
    props = { isLogged: false };
    component = shallow(<Home {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('render property - isLogged: true', () => {
    props = { isLogged: true };
    component = shallow(<Home {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
