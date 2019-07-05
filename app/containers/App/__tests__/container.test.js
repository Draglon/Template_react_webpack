import React from 'react';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';

import AppContainer from '../container';

describe('<AppContainer />', () => {
  const mockStore = configureStore();
  const sessionId = 'some session id';
  const state = {
    reducers: {
      login: {
        session_id: sessionId,
      },
    },
  };
  const props = {
    isLogged: sessionId,
  };

  const store = mockStore(state);
  const container = shallow(<AppContainer store={store} {...props} />);

  it('Render property', () => {
    expect(toJson(container)).toMatchSnapshot();
  });
});
