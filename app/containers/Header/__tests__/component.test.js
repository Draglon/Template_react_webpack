import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import HeaderComponent from '../component';

describe('<HeaderComponent /> component', () => {
  const props = {
    profile: { avatar: 'gravatar_hash', name: 'name', username: 'username' },
    removeSessionId: jest.fn(),
  };
  let component;

  beforeEach(() => {
    component = shallow(<HeaderComponent {...props} />);
  });

  it('Render property', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
