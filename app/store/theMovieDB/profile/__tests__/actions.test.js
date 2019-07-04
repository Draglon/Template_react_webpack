import { profileRequest, profileSuccess, profileFailure } from '../actions';
import * as t from '../actionTypes';

describe('Account - profile actions', () => {
  it('profileRequest', () => {
    const expectedAction = {
      type: t.PROFILE_REQUEST,
    };
    expect(profileRequest()).toEqual(expectedAction);
  });

  it('profileSuccess', () => {
    const expectedAction = {
      type: t.PROFILE_SUCCESS,
      payload: ['some data'],
    };
    expect(profileSuccess(expectedAction.payload)).toEqual(expectedAction);
  });

  it('profileFailure', () => {
    const expectedAction = {
      type: t.PROFILE_FAILURE,
      payload: ['some data'],
    };
    expect(profileFailure(expectedAction.payload)).toEqual(expectedAction);
  });
});
