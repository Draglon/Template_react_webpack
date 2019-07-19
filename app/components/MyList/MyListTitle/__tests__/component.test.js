import React from 'react';

import MyListsTitleComponent from '../component';

describe('<MyListsTitleComponent />', () => {
  const props = {
    myList: {
      id: 1,
      title: 'title',
      total: 10,
      results: [
        {
          id: 1,
          overview: 'text_1',
          poster_path: 'path_1',
          title: 'title_1',
        },
        {
          id: 2,
          overview: 'text_2',
          poster_path: 'path_2',
          title: 'title_2',
        },
      ],
    },
    modalParams: {
      title: 'title',
      onConfirm: () => {},
    },
  };
  const component = shallow(<MyListsTitleComponent {...props} />);

  it('shound match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
