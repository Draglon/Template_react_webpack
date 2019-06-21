import { getAuthAccess } from '../selectors';

describe('Authentication selectors', () => {
  it('getAuthAccess - get session_id from store', () => {
    const sessionId = 'some session_id';
    const state = {
      reducers: {
        access: {
          session_id: sessionId,
        },
      },
    };
    expect(getAuthAccess(state)).toEqual(sessionId);
  });
});
