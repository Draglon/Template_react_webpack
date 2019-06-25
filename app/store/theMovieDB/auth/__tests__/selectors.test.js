import { getSessionId } from '../selectors';

describe('Authentication selectors', () => {
  it('getSessionId - get session_id from store', () => {
    const sessionId = 'some session_id';
    const state = {
      reducers: {
        access: {
          session_id: sessionId,
        },
      },
    };
    expect(getSessionId(state)).toEqual(sessionId);
  });
});
