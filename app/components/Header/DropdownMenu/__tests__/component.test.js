import React from 'react';
import toJson from 'enzyme-to-json';

import DropdownMenu from '../component';

describe('<DropdownMenu /> component', () => {
  let component;
  const props = {
    deleteSessionRequest: () => {},
  };

  it('Render property - with avatar', () => {
    component = shallow(<DropdownMenu {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
