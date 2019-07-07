import { createListRequest, createListSuccess, createListFailure } from '../actions';
import * as t from '../actionTypes';

describe('Authentication actions', () => {
  it('createListRequest', () => {
    const expectedAction = {
      type: t.CREATE_LIST_REQUEST,
      payload: ['some data'],
    };
    expect(createListRequest(expectedAction.payload)).toEqual(expectedAction);
  });

  it('createListSuccess', () => {
    const expectedAction = {
      type: t.CREATE_LIST_SUCCESS,
      payload: ['some data'],
    };
    expect(createListSuccess(expectedAction.payload)).toEqual(expectedAction);
  });

  it('createListFailure', () => {
    const expectedAction = {
      type: t.CREATE_LIST_FAILURE,
      payload: ['some data'],
    };
    expect(createListFailure(expectedAction.payload)).toEqual(expectedAction);
  });
});
