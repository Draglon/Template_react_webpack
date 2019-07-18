import React from 'react';
import configureStore from 'redux-mock-store';

import HomeContainer from '../container';

describe('<HomeContainer />', () => {
  const sessionId = 'some session id';
  const state = {
    reducers: {
      login: {
        sessionId,
      },
    },
  };

  const store = configureStore()(state);
  const container = shallow(<HomeContainer store={store} />);

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
