import React from 'react';

import SearchComponent from '../component';

describe('<SearchComponent />', () => {
  it('should match snapshot', () => {
    const props = {
      onSearch: jest.fn({ query: 'some string', page: 1 }),
    };
    const component = shallow(<SearchComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
