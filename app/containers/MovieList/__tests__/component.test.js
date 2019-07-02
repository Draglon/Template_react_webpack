import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import MovieListComponent from '../component';

describe('<MovieListComponent /> container', () => {
  let component;
  const props = {
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
  };

  it('render property', () => {
    component = shallow(<MovieListComponent {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
