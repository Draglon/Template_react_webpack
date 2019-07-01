import { searchRequest, searchSuccess, searchFailure } from '../actions';
import * as t from '../actionTypes';

describe('Account - profile actions', () => {
  it('searchRequest', () => {
    const expectedAction = {
      type: t.SEARCH_REQUEST,
      payload: ['some data'],
    };
    expect(searchRequest(expectedAction.payload)).toEqual(expectedAction);
  });

  it('searchSuccess', () => {
    const expectedAction = {
      type: t.SEARCH_SUCCESS,
      payload: ['some data'],
    };
    expect(searchSuccess(expectedAction.payload)).toEqual(expectedAction);
  });

  it('searchFailure', () => {
    const expectedAction = {
      type: t.SEARCH_FAILURE,
      payload: ['some data'],
    };
    expect(searchFailure(expectedAction.payload)).toEqual(expectedAction);
  });
});
