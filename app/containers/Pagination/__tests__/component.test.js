import React from 'react';
import toJson from 'enzyme-to-json';

import PaginationComponent from '../component';

describe('<PaginationComponent /> container', () => {
  let component;
  const props = {
    query: 'some string',
    currentPage: 10,
    totalPages: 10,
    getPage: jest.fn(),
  };

  it('render property', () => {
    component = shallow(<PaginationComponent {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
