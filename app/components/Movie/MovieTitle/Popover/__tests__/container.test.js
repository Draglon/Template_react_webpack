import React from 'react';
import configureStore from 'redux-mock-store';

import PopoverContainer from '../container';

describe('<PopoverContainer />', () => {
  const state = {
    popoverVisible: false,
  };

  const props = {
    movieId: 999,
  };

  const store = configureStore()(state);
  store.dispatch = jest.fn();

  const container = shallow(<PopoverContainer store={store} {...props} />);
  const instance = container.instance();

  describe('handleVisiblePopover()', () => {
    it('should call handleVisiblePopover()', () => {
      instance.handleVisiblePopover(false);
      expect(container.state('popoverVisible')).toEqual(false);
    });
  });

  describe('closePopover()', () => {
    it('should call closePopover()', () => {
      const spy = jest.spyOn(instance, 'handleVisiblePopover');
      instance.closePopover();
      expect(spy).toHaveBeenCalledWith(false);
    });
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
