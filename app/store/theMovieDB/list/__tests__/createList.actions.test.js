import {
  createListTypeRequest,
  createListTypeSuccess,
  createListTypeFailure,
  createListRequest,
  createListSuccess,
  createListFailure,
} from '../list.actions';
import t from '../list.actionTypes';

describe('Authentication actions', () => {
  it('createListTypeRequest', () => {
    expect(createListTypeRequest()).toEqual(t.CREATE_LIST_REQUEST);
  });

  it('createListTypeSuccess', () => {
    expect(createListTypeSuccess()).toEqual(t.CREATE_LIST_SUCCESS);
  });

  it('createListTypeFailure', () => {
    expect(createListTypeFailure()).toEqual(t.CREATE_LIST_FAILURE);
  });

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
