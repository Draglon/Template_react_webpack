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

  it('should match snapshot - without results', () => {
    expect(component).toMatchSnapshot();
  });

  it('should match snapshot - with results', () => {
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
