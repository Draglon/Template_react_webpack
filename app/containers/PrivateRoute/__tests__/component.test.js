import React from 'react';
import toJson from 'enzyme-to-json';

import AppComponent from '../component';

describe('<AppComponent /> component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<AppComponent />);
  });

  it('Render property', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
