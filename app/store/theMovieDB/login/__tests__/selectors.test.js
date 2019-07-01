import { getSessionId, loginError } from '../selectors';

describe('Authentication selectors', () => {
  it('getSessionId - get session_id from store', () => {
    const sessionId = 'some session_id';
    const state = {
      reducers: {
        login: {
          session_id: sessionId,
        },
      },
    };
    expect(getSessionId(state)).toEqual(sessionId);
  });

  it('loginError - get error message for wrong login', () => {
    const message = 'some error message';
    const state = {
      reducers: {
        login: {
          error: message,
        },
      },
    };
    expect(loginError(state)).toEqual(message);
  });
});
