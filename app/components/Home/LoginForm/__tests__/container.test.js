import React from 'react';
import configureStore from 'redux-mock-store';
import { createSessionRequest } from '../../../../store/theMovieDB/login/actions';

import LoginFormContainer from '../container';

describe('<LoginFormContainer />', () => {
  const state = {
    reducers: {
      login: {
        error: 'field error',
      },
    },
  };
  const store = configureStore()(state);
  store.dispatch = jest.fn();
  const wrapper = shallow(<LoginFormContainer store={store} />);
  const container = wrapper.dive();
  const instance = container.instance();

  describe('onSubmit()', () => {
    it('should call onSubmit()', () => {
      const values = { login: 'login', password: 'password' };
      const actions = { setSubmitting: jest.fn() };
      instance.onSubmit(values, actions);

      expect(actions.setSubmitting).toHaveBeenCalledWith(true);
      expect(store.dispatch).toHaveBeenCalledWith(createSessionRequest({ values, actions }));
    });
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
