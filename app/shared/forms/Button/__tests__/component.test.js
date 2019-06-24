import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import FormButton from '../component';

describe('<FormButton /> component', () => {
  let props = { htmlType: 'submit', type: 'sometype', size: 'small', value: 'Submit' };
  let component;

  it('Render property with icon', () => {
    props = { ...props, icon: 'user' };
    component = shallow(<FormButton {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('Render property without icon', () => {
    props = { ...props, icon: '' };
    component = shallow(<FormButton {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
