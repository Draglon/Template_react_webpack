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

  describe('popoverVisible true', () => {
    it('should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('popoverVisible false', () => {
    it('should match snapshot', () => {
      const newProps = {
        ...props,
        popoverVisible: false,
      };
      component.setProps(newProps);
      expect(component).toMatchSnapshot();
    });
  });
});
