import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import FormButton from '../component';

describe('<FormButton /> component', () => {
  let props = { htmlType: 'submit', type: 'sometype', size: 'small', value: 'Submit', icon: '' };
  let component;

  it('Render property - without icon', () => {
    component = shallow(<FormButton {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('Render property - with icon', () => {
    props = { ...props, icon: 'some icon name' };
    component = shallow(<FormButton {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('Render property - with size large', () => {
    props = { ...props, size: 'large' };
    component = shallow(<FormButton {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('Render property - with size default', () => {
    props = { ...props, size: 'default' };
    component = shallow(<FormButton {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
