import React from 'react';

import ListsComponent from '../component';

describe('<ListsComponent />', () => {
  const props = {
    lists: [
      { id: 1, name: 'List 1', description: 'List 1 - description' },
      { id: 2, name: 'List 2', description: 'List 2 - description' },
    ],
    onConfirm: () => {},
  };

  const component = shallow(<ListsComponent {...props} />);

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
