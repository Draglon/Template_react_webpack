import React from 'react';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';

import PrivateRouteComponent from '../container';

describe('<PrivateRouteComponent />', () => {
  const mockStore = configureStore();
  const sessionId = 'some session id';
  const state = {
    reducers: {
      login: {
        sessionId,
      },
    },
  };

  const store = mockStore(state);
  const container = shallow(<PrivateRouteComponent store={store} />);

  it('Render property', () => {
    expect(toJson(container)).toMatchSnapshot();
  });
});
