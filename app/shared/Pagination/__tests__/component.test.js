import React from 'react';

import PaginationComponent from '../component';

describe('<PaginationComponent />', () => {
  let component;
  let props = {
    page: (page = 1) => page,
    currentPage: 10,
    totalPages: 10,
  };

  it('Render snapshot - with totalPages', () => {
    props = {
      ...props,
      totalPages: 10,
    };
    component = shallow(<PaginationComponent {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('Render snapshot - without totalPages', () => {
    props = {
      ...props,
      totalPages: 0,
    };
    component = shallow(<PaginationComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
