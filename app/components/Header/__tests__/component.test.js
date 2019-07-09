import React from 'react';
import toJson from 'enzyme-to-json';

import HeaderComponent from '../component';

describe('<HeaderComponent /> component', () => {
  let props = {
    profile: { avatar: 'gravatar_hash', name: 'name', username: 'username' },
    removeSessionId: jest.fn(),
  };
  let component;

  it('Render property - with avatar', () => {
    component = shallow(<HeaderComponent {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('Render property - without avatar', () => {
    props = {
      ...props,
      profile: { avatar: '', name: 'name', username: 'username' },
    };
    component = shallow(<HeaderComponent {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
