import React from 'react';

import PopoverContentComponent from '../component';

describe('<PopoverContentComponent />', () => {
  const props = {
    closePopover: () => {},
    myLists: {
      results: [],
    },
    movieId: 999,
  };
  const component = shallow(<PopoverContentComponent {...props} />);

  describe('without results', () => {
    it('should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
  describe('with results', () => {
    it('should match snapshot', () => {
      const newProps = {
        ...props,
        myLists: {
          results: [{ id: 1, name: 'List 1' }, { id: 1, name: 'List 1' }],
        },
      };
      component.setProps(newProps);
      expect(component).toMatchSnapshot();
    });
  });
});
