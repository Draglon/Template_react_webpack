import React from 'react';
import configureStore from 'redux-mock-store';

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
  const instance = container.instance();
  console.log(instance.props);

  it('Should be called', () => {
    expect(instance.props.isLogged).toEqual(sessionId);
  });
});
