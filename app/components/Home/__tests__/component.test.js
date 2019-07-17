import React from 'react';

import HomeComponent from '../component';

describe('<HomeComponent />', () => {
  let component;
  let props;

  it('Render snapshot - sessionId: false', () => {
    props = { sessionId: '' };
    component = shallow(<HomeComponent {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('Render snapshot - sessionId: true', () => {
    props = { sessionId: 'some sessionId' };
    component = shallow(<HomeComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
