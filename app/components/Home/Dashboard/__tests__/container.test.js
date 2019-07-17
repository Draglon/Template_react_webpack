import React from 'react';
import configureStore from 'redux-mock-store';

import DashboardContainer from '../container';

describe('DashboardContainer', () => {
  const state = {
    reducers: {
      search: {
        data: {
          query: 'search string',
        },
      },
    },
  };

  const store = configureStore()(state);
  const container = shallow(<DashboardContainer store={store} />);

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
