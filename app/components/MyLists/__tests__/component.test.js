import React from 'react';

import MyListsComponent from '../component';

describe('<MyListsComponent />', () => {
  const props = {
    myLists: {
      results: [1, 2, 3],
      page: 1,
      totalPages: 10,
    },
    page: () => ({ page: 1 }),
  };

  const component = shallow(<MyListsComponent {...props} />);

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
