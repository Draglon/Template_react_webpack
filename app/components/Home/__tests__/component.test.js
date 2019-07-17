import React from 'react';

import HomeComponent from '../component';

describe('<HomeComponent />', () => {
  const props = { sessionId: '' };
  const component = shallow(<HomeComponent {...props} />);

  it('should match snapshot - sessionId: false', () => {
    expect(component).toMatchSnapshot();
  });

  it('should match snapshot - sessionId: true', () => {
    component.setProps({ sessionId: 'some sessionId' });
    expect(component).toMatchSnapshot();
  });
});
