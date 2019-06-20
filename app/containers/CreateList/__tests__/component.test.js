import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ConnectedCreateList, { CreateList } from '../component';

describe('<CreateList /> component', () => {
  const initialState = {
    isLogged: false,
    removeSessionId: () => {},
  };
  let store;
  let component;

  beforeEach(() => {
    store = configureStore(initialState);
    component = shallow(<ConnectedCreateList store={store} />);
  });

  it('Render property', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
