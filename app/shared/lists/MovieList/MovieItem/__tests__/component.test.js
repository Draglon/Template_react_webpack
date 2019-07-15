import React from 'react';

import MovieItemComponent from '../component';

describe('<MovieItemComponent /> container', () => {
  let component;
  let props = {
    item: {
      id: 'some id',
      title: 'some title',
      overview: 'some overview',
      poster_path: 'path to image',
    },
  };

  it('Render property with card actions', () => {
    props = {
      ...props,
      actions: [1, 2, 3],
    };
    component = shallow(<MovieItemComponent {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('Render snapshot - without card actions', () => {
    props = {
      ...props,
      actions: null,
    };
    component = shallow(<MovieItemComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
