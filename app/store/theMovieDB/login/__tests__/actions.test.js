import {
  createSessionRequest,
  createSessionSuccess,
  createSessionFailure,
  deleteSessionRequest,
  deleteSessionSuccess,
  deleteSessionFailure,
} from '../actions';
import * as t from '../actionTypes';

describe('Authentication create session actions', () => {
  it('createSessionRequest', () => {
    const expectedAction = {
      type: t.CREATE_SESSION_REQUEST,
      payload: ['some data'],
    };
    expect(createSessionRequest(expectedAction.payload)).toEqual(expectedAction);
  });

  it('createSessionSuccess', () => {
    const expectedAction = {
      type: t.CREATE_SESSION_SUCCESS,
      payload: ['some data'],
    };
    expect(createSessionSuccess(expectedAction.payload)).toEqual(expectedAction);
  });

  it('createSessionFailure', () => {
    const expectedAction = {
      type: t.CREATE_SESSION_FAILURE,
      payload: ['some data'],
    };
    expect(createSessionFailure(expectedAction.payload)).toEqual(expectedAction);
  });
});

describe('Authentication delete session actions', () => {
  it('deleteSessionRequest', () => {
    const expectedAction = {
      type: t.DELETE_SESSION_REQUEST,
    };
    expect(deleteSessionRequest()).toEqual(expectedAction);
  });

  it('deleteSessionSuccess', () => {
    const expectedAction = {
      type: t.DELETE_SESSION_SUCCESS,
      payload: ['some data'],
    };
    expect(deleteSessionSuccess(expectedAction.payload)).toEqual(expectedAction);
  });

  it('deleteSessionFailure', () => {
    const expectedAction = {
      type: t.DELETE_SESSION_FAILURE,
      payload: ['some data'],
    };
    expect(deleteSessionFailure(expectedAction.payload)).toEqual(expectedAction);
  });
});
