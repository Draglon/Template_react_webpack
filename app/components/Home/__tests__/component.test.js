import React from 'react';

import HomeComponent from '../component';

describe('<HomeComponent />', () => {
  let component;
  let props;

  it('Render snapshot - isLogged: false', () => {
    props = { isLogged: '' };
    component = shallow(<HomeComponent {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('Render snapshot - isLogged: true', () => {
    props = { isLogged: 'some sessionId' };
    component = shallow(<HomeComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
