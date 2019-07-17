import { profileRequest, profileSuccess, profileFailure } from '../actions';
import * as t from '../actionTypes';

describe('Profile - actions', () => {
  it('profileRequest', () => {
    expect(profileRequest()).toEqual({
      type: t.PROFILE_REQUEST,
    });
  });

  it('profileSuccess', () => {
    const payload = { id: 999 };
    expect(profileSuccess(payload)).toEqual({
      type: t.PROFILE_SUCCESS,
      payload,
    });
  });

  it('profileFailure', () => {
    const payload = { message: 'message error' };
    expect(profileFailure(payload)).toEqual({
      type: t.PROFILE_FAILURE,
      payload,
    });
  });
});
