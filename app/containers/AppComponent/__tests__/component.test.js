import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ConnectedAppComponent, { AppComponent } from '../component';

describe('<AppComponent /> component', () => {
  const initialState = {
    isLogged: false,
    removeSessionId: () => {},
  };
  let store;
  let component;

  beforeEach(() => {
    store = configureStore(initialState);
    component = shallow(<ConnectedAppComponent store={store} />);
  });

  it('Render property', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
