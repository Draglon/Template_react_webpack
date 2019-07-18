import React from 'react';

import HomeComponent from '../component';

describe('<HomeComponent />', () => {
  const props = { sessionId: '' };
  const component = shallow(<HomeComponent {...props} />);

  describe('sessionId: false', () => {
    it('should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('sessionId: true', () => {
    it('should match snapshot', () => {
      component.setProps({ sessionId: 'some sessionId' });
      expect(component).toMatchSnapshot();
    });
  });
});
