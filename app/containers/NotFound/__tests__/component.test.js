import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import NotFound from '../component';

describe('<NotFound /> component', () => {
  const component = shallow(<NotFound />);

  it('render property', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
