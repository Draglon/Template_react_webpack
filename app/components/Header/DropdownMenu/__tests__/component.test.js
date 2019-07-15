import React from 'react';

import DropdownMenuComponent from '../component';

describe('<DropdownMenuComponent />', () => {
  let component;
  const props = {
    deleteSessionRequest: () => {},
  };

  it('Render snapshot - DropdownMenuComponent', () => {
    component = shallow(<DropdownMenuComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
