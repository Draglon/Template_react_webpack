import React from 'react';

import MovieTitleComponent from '../component';

describe('<MovieTitleComponent />', () => {
  const props = {
    movie: {
      id: 999,
      title: 'some title',
      watchlist: true,
      favorite: true,
    },
  };
  const component = shallow(<MovieTitleComponent {...props} />);

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
