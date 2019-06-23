import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import LoginForm from '../component';

describe('<LoginForm /> component', () => {
  const props = { setAccess: jest.fn() };
  let component;

  beforeEach(() => {
    component = shallow(<LoginForm {...props} />);
  });

  it('Render property', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
