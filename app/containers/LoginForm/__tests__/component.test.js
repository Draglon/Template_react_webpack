import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedLoginForm, { LoginForm } from '../component';

describe('<LoginForm /> component', () => {
  const mockStore = configureStore();
  const initialState = {};
  // const props = {
  //   isLogged: false,
  //   removeSessionId: () => {},
  // };
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(initialState);
    component = shallow(<ConnectedLoginForm store={store} />);
  });

  describe('Rendering component', () => {
    it('Render property', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
