import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import DashboardComponent from '../component';

describe('<HomeComponent /> container', () => {
  const mockFetchTrendingRequest = jest.fn();
  const props = {
    searchRequest: jest.fn(),
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
  let nextProps = {
    ...props,
    trendingRequest: mockFetchTrendingRequest,
  };
  let component;

  it('render property - without search query', () => {
    component = shallow(<DashboardComponent {...nextProps} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('render property - with search query', () => {
    nextProps = {
      ...nextProps,
      search: {
        query: 'some string',
        page: 1,
        results: [],
        totalPages: 20,
      },
    };
    component = shallow(<DashboardComponent {...nextProps} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('dispatches the `trendingRequest()` method it receives from props', () => {
    expect(mockFetchTrendingRequest).toHaveBeenCalled();
  });
});
