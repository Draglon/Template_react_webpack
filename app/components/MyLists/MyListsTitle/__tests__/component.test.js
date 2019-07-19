import React from 'react';

import MyListsTitleComponent from '../component';

describe('<MyListsComponent />', () => {
  const component = shallow(<MyListsTitleComponent />);

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
