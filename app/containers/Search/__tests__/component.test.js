import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SearchComponent from '../component';

describe('<SearchComponent /> container', () => {
  const props = {
    onSearch: jest.fn({ query: 'some string', page: 1 }),
  };
  let component;

  it('render property - with search query', () => {
    component = shallow(<SearchComponent {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
