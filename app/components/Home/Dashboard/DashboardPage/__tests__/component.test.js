import React from 'react';

import DashboardPageComponent from '../component';

describe('<DashboardPageComponent />', () => {
  const props = {
    trending: {
      results: [1, 2, 3],
      page: 1,
      totalPages: 100,
    },
    page: () => ({ page: 1 }),
    onSearch: () => 'search string',
  };
  const component = shallow(<DashboardPageComponent {...props} />);

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
