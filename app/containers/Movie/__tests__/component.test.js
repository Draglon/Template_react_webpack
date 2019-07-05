import React from 'react';
import toJson from 'enzyme-to-json';

import MovieComponent from '../component';

describe('<SearchComponent />', () => {
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
      cast: [1, 2, 3],
      crew: [1, 2, 3],
      backdrops: [{ file_path: 'path' }, { file_path: 'path' }, { file_path: 'path' }],
      posters: [1, 2, 3],
    },
  };
  let component;

  it('render property', () => {
    component = shallow(<MovieComponent {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
