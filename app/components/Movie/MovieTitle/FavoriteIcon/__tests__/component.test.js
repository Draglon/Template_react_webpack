import React from 'react';

import MovieTitleComponent from '../component';

describe('<MovieTitleComponent />', () => {
  const props = {
    favorite: false,
    handleFavorite: () => {},
  };
  const component = shallow(<MovieTitleComponent {...props} />);

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
