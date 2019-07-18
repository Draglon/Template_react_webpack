import React from 'react';
import configureStore from 'redux-mock-store';

import ListsContainer from '../container';

describe('<ListsContainer />', () => {
  const props = {
    lists: [
      { id: 1, name: 'List 1', description: 'List 1 - description' },
      { id: 2, name: 'List 2', description: 'List 2 - description' },
    ],
  };

  const store = configureStore()({});
  const wrapper = shallow(<ListsContainer store={store} {...props} />);
  const container = wrapper.dive();

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
