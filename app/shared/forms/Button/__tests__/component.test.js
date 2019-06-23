import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import FormButton from '../component';

describe('<FormButton /> component', () => {
  const props = { type: 'submit', value: 'Submit' };
  let component;

  beforeEach(() => {
    component = shallow(<FormButton {...props} />);
  });

  it('Render property', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
