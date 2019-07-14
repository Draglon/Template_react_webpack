import React from 'react';
import toJson from 'enzyme-to-json';

import FavoritesComponent from '../component';

describe('<FavoritesComponent /> container', () => {
  let component;
  const props = {
    favorites: {
      results: [1, 2, 3],
      page: 1,
      totalPages: 100,
    },
    page: () => ({ page: 1 }),
    modalParams: {},
  };

  it('render property', () => {
    component = shallow(<FavoritesComponent {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
