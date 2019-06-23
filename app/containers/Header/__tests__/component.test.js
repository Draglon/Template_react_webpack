import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from '../component';

describe('<Header /> component', () => {
  let props;
  let component;

  it('Render property - isLogged: false', () => {
    props = { isLogged: false, removeSessionId: jest.fn() };
    component = shallow(<Header {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('Render property - isLogged: true', () => {
    props = { isLogged: true, removeSessionId: jest.fn() };
    component = shallow(<Header {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
