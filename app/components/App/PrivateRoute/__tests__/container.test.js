import React from 'react';
import configureStore from 'redux-mock-store';

import PrivateRouteContainer from '../container';

describe('<PrivateRouteContainer />', () => {
  const sessionId = 'some session id';
  const state = {
    reducers: {
      login: {
        sessionId,
      },
    },
  };

  const store = configureStore()(state);
  const container = shallow(<PrivateRouteContainer store={store} />);

  it('Render snapshot - PrivateRouteContainer', () => {
    expect(container).toMatchSnapshot();
  });
});
