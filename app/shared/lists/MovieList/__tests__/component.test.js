import React from 'react';

import MovieListComponent from '../component';

describe('<MovieListComponent /> container', () => {
  let component;
  let props;

  it('Render snapshot - without movies', () => {
    props = {
      movies: [],
      modalParams: null,
    };
    component = shallow(<MovieListComponent {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('Render snapshot - without modal params', () => {
    props = {
      movies: [{ id: 1 }, { id: 2 }, { id: 3 }],
      modalParams: null,
    };
    component = shallow(<MovieListComponent {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('Render snapshot - with modal params', () => {
    props = {
      movies: [{ id: 1 }, { id: 2 }, { id: 3 }],
      modalParams: {
        title: 'some title',
        params: { movieId: 9999 },
        onConfirm: () => {},
      },
    };
    component = shallow(<MovieListComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
