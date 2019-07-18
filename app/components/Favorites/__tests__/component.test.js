import React from 'react';

import FavoritesComponent from '../component';

describe('<FavoritesComponent />', () => {
  let component;
  const props = {
    favorites: {
      results: [1, 2, 3],
      page: 1,
      totalPages: 100,
    },
    page: () => ({ page: 1 }),
    modalParams: { favorite: false },
  };

  it('Render snapshot - FavoritesComponent', () => {
    component = shallow(<FavoritesComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
