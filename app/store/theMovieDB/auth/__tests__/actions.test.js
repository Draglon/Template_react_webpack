import { accessRequest, accessSuccess, accessFailure, accessRemove } from '../actions';
import t from '../actionTypes';

describe('Authentication actions', () => {
  it('accessRequest', () => {
    const expectedAction = {
      type: t.ACCESS_REQUEST,
      payload: ['some data'],
    };
    expect(accessRequest(expectedAction.payload)).toEqual(expectedAction);
  });

  it('accessSuccess', () => {
    const expectedAction = {
      type: t.ACCESS_SUCCESS,
      payload: ['some data'],
    };
    expect(accessSuccess(expectedAction.payload)).toEqual(expectedAction);
  });

  it('accessFailure', () => {
    const expectedAction = {
      type: t.ACCESS_FAILURE,
      payload: ['some data'],
    };
    expect(accessFailure(expectedAction.payload)).toEqual(expectedAction);
  });

  it('accessRemove', () => {
    expect(accessRemove()).toEqual({ type: t.ACCESS_REMOVE });
  });
});
