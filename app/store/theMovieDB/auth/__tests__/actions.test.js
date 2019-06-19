import {
  accessTypeRequest,
  accessTypeSuccess,
  accessTypeFailure,
  accessTypeRemove,
  accessRequest,
  accessSuccess,
  accessFailure,
  accessRemove,
} from '../access.actions';
import t from '../access.actionTypes';

describe('Authentication actions', () => {
  it('accessTypeRequest', () => {
    expect(accessTypeRequest()).toEqual(t.ACCESS_REQUEST);
  });

  it('accessTypeSuccess', () => {
    expect(accessTypeSuccess()).toEqual(t.ACCESS_SUCCESS);
  });

  it('accessTypeFailure', () => {
    expect(accessTypeFailure()).toEqual(t.ACCESS_FAILURE);
  });

  it('accessTypeRemove', () => {
    expect(accessTypeRemove()).toEqual(t.ACCESS_REMOVE);
  });

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
