import React from 'react';
import configureStore from 'redux-mock-store';

import AppContainer from '../container';

describe('<AppContainer />', () => {
  const sessionId = 'some session id';
  const state = {
    reducers: {
      login: {
        sessionId,
      },
    },
  };

  const store = configureStore()(state);
  const container = shallow(<AppContainer store={store} />);

  it('Render snapshot - AppContainer', () => {
    expect(container).toMatchSnapshot();
  });
});
