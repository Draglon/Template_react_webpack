import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ConnectedLoginForm, { LoginForm } from '../component';

describe('<LoginForm /> component', () => {
  const initialState = {};
  let store;
  let component;

  beforeEach(() => {
    store = configureStore(initialState);
    component = shallow(<ConnectedLoginForm store={store} />);
  });

  it('Render property', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
