import React from 'react';

import MyListComponent from '../component';

describe('<MyListComponent />', () => {
  const listId = 9999;
  const props = {
    myList: {
      id: 1,
      title: 'title',
      total: 10,
      results: [
        {
          id: 1,
          overview: 'text',
          poster_path: 'path',
          title: 'title',
        },
        {
          id: 2,
          overview: 'text',
          poster_path: 'path',
          title: 'title',
        },
      ],
    },
    modalParams: {
      title: 'title',
      params: { listId },
      onConfirm: () => {},
    },
  };
  const component = shallow(<MyListComponent {...props} />);

  it('shound match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
