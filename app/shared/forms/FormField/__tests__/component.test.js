import React from 'react';
import { Icon } from 'antd';

import FormField from '../component';

describe('<FormField /> component', () => {
  let props;
  let component;

  it('Render snapshot - with error', () => {
    props = {
      field: { name: 'name' },
      form: { touched: { name: true }, errors: { name: 'some error msg' } },
      fieldPrefix: false,
      type: 'text',
      placeholder: 'placeholder',
    };
    component = shallow(<FormField {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('Render snapshot - without error', () => {
    props = {
      field: { name: 'name' },
      form: { touched: { name: false }, errors: {} },
      fieldPrefix: false,
      type: 'text',
      placeholder: 'placeholder',
    };
    component = shallow(<FormField {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('Render snapshot - with field prefix and error', () => {
    props = {
      field: { name: 'name' },
      form: { touched: { name: true }, errors: { name: 'some error msg' } },
      fieldPrefix: <Icon type="lock" />,
      type: 'text',
      placeholder: 'placeholder',
    };
    component = shallow(<FormField {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('Render snapshot - with field prefix and without error', () => {
    props = {
      field: { name: 'name' },
      form: { touched: { name: false }, errors: {} },
      fieldPrefix: <Icon type="lock" />,
      type: 'text',
      placeholder: 'placeholder',
    };
    component = shallow(<FormField {...props} />);
    expect(component).toMatchSnapshot();
  });
});
