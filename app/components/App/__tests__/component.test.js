import React from 'react';
import toJson from 'enzyme-to-json';

import AppComponent from '../component';

describe('<AppComponent /> component', () => {
  let component;
  let props;

  it('Render property - isLogged: false', () => {
    // props = { isLogged: false };
    // component = shallow(<AppComponent {...props} />);

    // expect(toJson(component)).toMatchSnapshot();
  });

  it('Render property - isLogged: true', () => {
    // props = { isLogged: true };
    // component = shallow(<AppComponent {...props} />);

    // expect(toJson(component)).toMatchSnapshot();
  });
});
