import { createSessionRequest, createSessionSuccess, createSessionFailure } from '../actions';
import * as t from '../actionTypes';

describe('Authentication actions', () => {
  it('accessRequest', () => {
    const expectedAction = {
      type: t.CREATE_SESSION_REQUEST,
      payload: ['some data'],
    };
    expect(createSessionRequest(expectedAction.payload)).toEqual(expectedAction);
  });

  it('accessSuccess', () => {
    const expectedAction = {
      type: t.CREATE_SESSION_SUCCESS,
      payload: ['some data'],
    };
    expect(createSessionSuccess(expectedAction.payload)).toEqual(expectedAction);
  });

  it('accessFailure', () => {
    const expectedAction = {
      type: t.CREATE_SESSION_FAILURE,
      payload: ['some data'],
    };
    expect(createSessionFailure(expectedAction.payload)).toEqual(expectedAction);
  });
});
