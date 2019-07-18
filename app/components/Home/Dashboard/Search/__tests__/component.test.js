import React from 'react';

import SearchComponent from '../component';

describe('<SearchComponent />', () => {
  const props = {
    onSearch: jest.fn({ query: 'some string', page: 1 }),
  };
  const component = shallow(<SearchComponent {...props} />);

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
