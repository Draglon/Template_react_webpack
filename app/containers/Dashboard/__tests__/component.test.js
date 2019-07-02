import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import DashboardComponent from '../component';

describe('<DashboardComponent /> container', () => {
  let props = {
    searchRequest: jest.fn(),
    trendingRequest: jest.fn(),
    trending: {
      page: 1,
      results: [],
      totalPages: 100,
    },
    search: {
      query: '',
      page: 1,
      results: [],
      totalPages: 20,
    },
  };
  let component;

  it('render property - without search query', () => {
    component = shallow(<DashboardComponent {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('render property - with search query', () => {
    props = {
      ...props,
      search: {
        query: 'some string',
        page: 1,
        results: [],
        totalPages: 20,
      },
    };
    component = shallow(<DashboardComponent {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
