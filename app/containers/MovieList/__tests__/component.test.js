import React from 'react';
import toJson from 'enzyme-to-json';

import MovieListComponent from '../component';

describe('<MovieListComponent /> container', () => {
  let component;
  let props;

  it('render property - with movies', () => {
    props = {
      movie: [
        {
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
      ],
    };
    component = shallow(<MovieListComponent {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('render property - without movies', () => {
    props = {
      movie: [],
    };
    component = shallow(<MovieListComponent {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
