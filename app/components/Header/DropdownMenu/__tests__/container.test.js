import React from 'react';
import configureStore from 'redux-mock-store';

import DropdownMenuContainer from '../container';

describe('<DropdownMenuContainer />', () => {
  const store = configureStore()({});
  const wrapper = shallow(<DropdownMenuContainer store={store} />);

  it('Render snapshot - DropdownMenuContainer', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
