import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import MovieComponent from '../component';

describe('<SearchComponent /> container', () => {
  const props = {
    movie: {
      id: 0,
      title: '',
      overview: '',
      budget: 0,
      genres: [],
      revenue: 0,
      runtime: 0,
      language: '',
      cast: [],
      crew: [],
      backdrops: [],
      posters: [],
    },
  };
  let component;

  it('render property - with search query', () => {
    component = shallow(<MovieComponent {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
