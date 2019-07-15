import React from 'react';

import AppComponent from '../component';

describe('<AppComponent /> component', () => {
  let component;
  let props;

  it('Render snapshot - isLogged: false', () => {
    props = { isLogged: '' };
    component = shallow(<AppComponent {...props} />);

    expect(component).toMatchSnapshot();
  });

  it('Render snapshot - isLogged: true', () => {
    props = { isLogged: 'some sessionId' };
    component = shallow(<AppComponent {...props} />);

    expect(component).toMatchSnapshot();
  });
});
