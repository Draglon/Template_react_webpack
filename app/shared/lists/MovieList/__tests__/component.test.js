import React from 'react';
import toJson from 'enzyme-to-json';

import MovieListComponent from '../component';

describe('<MovieListComponent /> container', () => {
  let component;
  let props;

  it('render property - with movies', () => {
    props = {
      movies: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };
    component = shallow(<MovieListComponent {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('render property - without movies', () => {
    props = {
      movies: [],
    };
    component = shallow(<MovieListComponent {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
