import React from 'react';

import PopoverComponent from '../component';

describe('<PopoverComponent />', () => {
  const props = {
    popoverVisible: true,
    closePopover: () => {},
    handleVisiblePopover: () => {},
    movieId: 999,
  };
  const component = shallow(<PopoverComponent {...props} />);

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
