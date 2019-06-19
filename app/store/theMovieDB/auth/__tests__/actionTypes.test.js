import t from '../actionTypes';

describe('Authentication actionTypes', () => {
  it('Action type request', () => {
    expect(t.ACCESS_REQUEST).toEqual('ACCESS_REQUEST');
  });

  it('Action type success', () => {
    expect(t.ACCESS_SUCCESS).toEqual('ACCESS_SUCCESS');
  });

  it('Action type failure', () => {
    expect(t.ACCESS_FAILURE).toEqual('ACCESS_FAILURE');
  });

  it('Action type remove', () => {
    expect(t.ACCESS_REMOVE).toEqual('ACCESS_REMOVE');
  });

  it('Action type is object', () => {
    const actionTypes = {
      ACCESS_REQUEST: 'ACCESS_REQUEST',
      ACCESS_SUCCESS: 'ACCESS_SUCCESS',
      ACCESS_FAILURE: 'ACCESS_FAILURE',
      ACCESS_REMOVE: 'ACCESS_REMOVE',
    };
    expect(t).toEqual(actionTypes);
  });
});
