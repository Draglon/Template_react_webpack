import React from 'react';

import SearchPageComponent from '../component';

describe('<SearchPageComponent />', () => {
  const props = {
    search: {
      results: [1, 2, 3],
      page: 1,
      totalPages: 100,
    },
    page: () => ({ page: 1 }),
    onSearch: () => 'search string',
  };
  const component = shallow(<SearchPageComponent {...props} />);

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
