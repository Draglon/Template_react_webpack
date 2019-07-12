import React from 'react';
import toJson from 'enzyme-to-json';

import MovieItemComponent from '../component';

describe('<MovieItemComponent /> container', () => {
  let component;
  const props = {
    item: {
      id: 'some id',
      title: 'some title',
      overview: 'some overview',
      budget: 1000000,
      genres: [],
      revenue: 1000000,
      runtime: 140,
      language: 'English',
      credits: {
        cast: [],
        crew: [],
      },
      images: {
        backdrops: [],
        posters: [],
      },
    },
  };

  it('render property', () => {
    // component = shallow(<MovieItemComponent {...props} />);
    // expect(toJson(component)).toMatchSnapshot();
  });
});
