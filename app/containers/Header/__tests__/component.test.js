import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ConnectedHeader, { Header } from '../component';

describe('<Header /> component', () => {
  const initialState = {
    isLogged: false,
    removeSessionId: () => {},
  };
  let store;
  let component;

  beforeEach(() => {
    store = configureStore(initialState);
    component = shallow(<ConnectedHeader store={store} />);
  });

  it('Render property', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
