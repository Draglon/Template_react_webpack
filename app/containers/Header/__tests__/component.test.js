import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedHeader, { Header } from '../component';

describe('<Header /> component', () => {
  const mockStore = configureStore();
  const initialState = {};
  const props = {
    isLogged: false,
    removeSessionId: () => {},
  };
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(initialState);
    component = shallow(<ConnectedHeader store={store} />);
  });

  describe('<Header /> component', () => {
    it('Render property', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
