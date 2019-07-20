import React from 'react';

import FavoriteIconComponent from '../component';

describe('<FavoriteIconComponent />', () => {
  const props = {
    favorite: false,
    handleFavorite: () => {},
  };
  const component = shallow(<FavoriteIconComponent {...props} />);

  it('should match snapshot - favorite (false)', () => {
    expect(component).toMatchSnapshot();
  });

  it('should match snapshot - favorite (true)', () => {
    const newProps = {
      ...props,
      favorite: true,
    };
    component.setProps(newProps);
    expect(component).toMatchSnapshot();
  });
});
