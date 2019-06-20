import { createMockStore } from 'redux-logic-test';

import reducer, { initialState } from '../reducers';
import authLogic from '../logic';
import apiClient from '../../../../apiClient/config';
import t from '../actionTypes';

const injectedDeps = {
  apiKey: '373ab70129f36fd1f65b6d7b24ec2641',
  apiClient,
};

const responseData = {
  success: true,
  session_id: '79191836ddaa0da3df76a5ffef6f07ad6ab0c641',
};

describe('Authentication logic', () => {
  let store;
  beforeAll(() => {
    store = createMockStore({
      initialState,
      reducer,
      logic: [authLogic],
      injectedDeps,
    });
  });

  it('Gets the correct authentication', () => {
    store.dispatch({ type: t.ACCESS_REQUEST });
    store.whenComplete(() =>
      expect(store.actions).toEqual([
        { type: t.ACCESS_REQUEST },
        { type: t.ACCESS_SUCCESS, payload: responseData },
      ]),
    );
  });
});
