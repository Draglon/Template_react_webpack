import React from 'react';
import toJson from 'enzyme-to-json';

import PaginationComponent from '../component';

describe('<PaginationComponent />', () => {
  let component;
  const props = {
    currentPage: 10,
    totalPages: 10,
    getPage: jest.fn(),
  };

  it('render property - with totalPages', () => {
    // component = shallow(<PaginationComponent {...props} />);
    // expect(toJson(component)).toMatchSnapshot();
  });

  it('render property - without totalPages', () => {
    // component = shallow(<PaginationComponent {...props} totalPages={0} />);
    // expect(toJson(component)).toMatchSnapshot();
  });
});
