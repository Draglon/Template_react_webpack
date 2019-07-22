import React from 'react';

import PopoverNavLinkComponent from '../component';

describe('<PopoverNavLinkComponent />', () => {
  const props = {
    list: {
      name: 'list 1',
    },
    onClick: () => {},
  };
  const component = shallow(<PopoverNavLinkComponent {...props} />);

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
