import React from 'react';
import configureStore from 'redux-mock-store';

import PopoverContainer from '../container';

describe('<PopoverContainer />', () => {
  const state = {
    popoverVisible: false,
  };

  const props = {
    movieId: 999,
    popoverVisible: false,
  };

  const store = configureStore()(state);
  store.dispatch = jest.fn();

  const container = shallow(<PopoverContainer store={store} {...props} />);
  const instance = container.instance();

  describe('handleVisiblePopover()', () => {
    it('dispatches the handleVisiblePopover()', () => {
      instance.handleVisiblePopover();
      expect(store.dispatch).toBe({
        popoverVisible: true,
      });
    });
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
