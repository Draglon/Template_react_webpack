import React from 'react';
import toJson from 'enzyme-to-json';

import FavoritesComponent from '../component';

describe('<FavoritesComponent /> container', () => {
  let component;

  it('render property', () => {
    component = shallow(<FavoritesComponent />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
