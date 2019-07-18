import React from 'react';

import MovieComponent from '../component';

describe('<MovieComponent />', () => {
  const props = {
    movie: {
      id: 999,
      title: 'some title',
      overview: 'some overview',
      budget: 100000,
      genres: [1, 2, 3],
      revenue: 1000000,
      runtime: 140,
      language: 'English',
      backdrops: [{ file_path: 'path' }, { file_path: 'path' }, { file_path: 'path' }],
    },
    genres: [{ id: 1 }, { id: 2 }, { id: 3 }],
    cast: [1, 2, 3],
    crew: [1, 2, 3],
  };
  const component = shallow(<MovieComponent {...props} />);

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
