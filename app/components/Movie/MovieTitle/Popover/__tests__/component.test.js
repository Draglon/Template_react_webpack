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

  it('should match snapshot - popoverVisible true', () => {
    expect(component).toMatchSnapshot();
  });

  it('should match snapshot - popoverVisible false', () => {
    const newProps = {
      ...props,
      popoverVisible: false,
    };
    component.setProps(newProps);
    expect(component).toMatchSnapshot();
  });
});
