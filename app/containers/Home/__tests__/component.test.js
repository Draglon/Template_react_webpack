import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ConnectedHome, { Home } from '../component';

describe('<Home /> container', () => {
  const initialState = {
    isLogged: false,
    removeSessionId: () => {},
  };
  let store;
  let component;

  beforeEach(() => {
    store = configureStore(initialState);
    component = shallow(<ConnectedHome store={store} />);
  });

  it('render property', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
