import React from 'react';

import FormButton from '../component';

describe('<FormButton /> component', () => {
  let props = { htmlType: 'submit', type: 'sometype', size: 'small', value: 'Submit' };
  let component;

  it('Render property - without icon', () => {
    component = shallow(<FormButton {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('Render property - with icon', () => {
    props = { ...props, icon: 'some icon name' };
    component = shallow(<FormButton {...props} />);
    expect(component).toMatchSnapshot();
  });
});
