import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import FormField from '../component';

describe('<FormField /> component', () => {
  const props = { field: { name: 'name' }, type: 'text', placeholder: 'placeholder' };
  let component;

  beforeEach(() => {
    component = shallow(<FormField {...props} />);
  });

  it('Render property', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
