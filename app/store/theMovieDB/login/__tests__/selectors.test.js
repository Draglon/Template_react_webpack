import { getSessionId, loginError } from '../selectors';

describe('Authentication - selectors', () => {
  it('getSessionId - get sessionId from store', () => {
    const sessionId = 'some sessionId';
    const state = {
      reducers: {
        login: {
          sessionId,
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
