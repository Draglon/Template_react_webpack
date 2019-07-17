import React from 'react';

import SearchComponent from '../component';

describe('<SearchComponent /> container', () => {
  const props = {
    onSearch: jest.fn({ query: 'some string', page: 1 }),
  };
  let component;

  it('render property - with search query', () => {
    component = shallow(<SearchComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
