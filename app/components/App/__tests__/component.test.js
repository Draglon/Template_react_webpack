import React from 'react';

import AppComponent from '../component';

describe('<AppComponent /> component', () => {
  let component;
  let props;

  it('Render snapshot - sessionId: false', () => {
    props = { sessionId: '' };
    component = shallow(<AppComponent {...props} />);

    expect(component).toMatchSnapshot();
  });

  it('Render snapshot - sessionId: true', () => {
    props = { sessionId: 'some sessionId' };
    component = shallow(<AppComponent {...props} />);

    expect(component).toMatchSnapshot();
  });
});
