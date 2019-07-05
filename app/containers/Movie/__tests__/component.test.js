import React from 'react';
import toJson from 'enzyme-to-json';

import MovieComponent from '../component';

describe('<MovieComponent />', () => {
  let component;
  let props;

  it('Render snapshot - movie', () => {
    props = {
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
    component = shallow(<MovieComponent {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
