import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import FormField from '../component';

describe('<FormField /> component', () => {
  let props;
  let component;

  it('Render property with error', () => {
    props = {
      field: { name: 'name' },
      form: { errors: 'some error msg' },
      type: 'text',
      placeholder: 'placeholder',
    };
    component = shallow(<FormField {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('Render property without error', () => {
    props = {
      field: { name: 'name' },
      form: { errors: false },
      type: 'text',
      placeholder: 'placeholder',
    };
    component = shallow(<FormField {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
