import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import LoginFormComponent from '../component';

describe('<LoginFormComponent /> component', () => {
  const props = { setAccess: jest.fn() };
  let component;

  beforeEach(() => {
    component = shallow(<LoginFormComponent {...props} />);
  });

  it('Render property', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
