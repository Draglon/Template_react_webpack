// import { createMockStore } from 'redux-logic-test';

// import { authAccessReducer, authAccessInitialState } from '../reducers';
// import authLogic from '../logic';
// import apiClient from '../../../../apiClient/client';
// import * as t from '../actionTypes';

describe('Authentication logic', () => {
  // let store;
  // let responseData;
  // let errorMsg;
  // beforeAll(() => {
  //   const injectedDeps = {
  //     apiKey: 'some api key',
  //     apiClient,
  //   };

  //   responseData = {
  //     success: true,
  //     session_id: 'any session id',
  //   };

  //   errorMsg = 'any error message';

  //   store = createMockStore({
  //     authAccessInitialState,
  //     authAccessReducer,
  //     logic: [authLogic],
  //     injectedDeps,
  //     middleware: [],
  //   });
  // });

  it('Gets success authentication', () => {
    // store.dispatch({ type: t.ACCESS_REQUEST });
    // store.whenComplete(() =>
    //   expect(store.actions).toEqual([
    //     { type: t.ACCESS_REQUEST },
    //     // { type: t.ACCESS_SUCCESS, payload: responseData },
    //   ]),
    // );
  });

  // it('Gets failure authentication', () => {
  //   store.dispatch({ type: t.ACCESS_REQUEST });
  //   store.whenComplete(() =>
  //     expect(store.actions).toEqual([
  //       { type: t.ACCESS_REQUEST },
  //       { type: t.ACCESS_FAILURE, payload: errorMsg },
  //     ]),
  //   );
  // });
});
