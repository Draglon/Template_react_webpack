import { normalize } from 'normalizr';
import { httpClientMock } from '../../../../helpers/httpClientMock';
import { profile } from '../../../schema';

import profileLogic from '../logic';
import { profileSuccess, profileFailure } from '../actions';
import { addEntities } from '../../data/actions';

describe('Profile - logic', () => {
  const sessionId = '9999';
  const state = {
    reducers: {
      login: {
        sessionId,
      },
    },
  };

  const dispatch = jest.fn();
  const getState = jest.fn(() => state);
  const done = jest.fn();

  describe('PROFILE_REQUEST', () => {
    describe('Profile SUCCESS', () => {
      const request = {
        method: 'get',
        response: {
          data: {
            id: 1,
            avatar: {
              gravatar: { hash: 'hash' },
            },
            name: 'name',
            username: 'login',
          },
        },
      };
      const apiClient = httpClientMock(request);

      profileLogic.process({ apiClient, getState }, dispatch, done);
      const {
        id,
        avatar: {
          gravatar: { hash },
        },
        name,
        username,
      } = request.response.data;
      const data = { id, avatar: hash, name, username };
      const { entities } = normalize(data, profile);

      it('Should return correct URL', () => {
        expect(apiClient.get).toHaveBeenCalledWith(`account?session_id=${sessionId}`);
      });

      it('dispatches addEntities()', () => {
        expect(dispatch).toHaveBeenCalledWith(addEntities(entities));
      });

      it('dispatches profileSuccess()', () => {
        expect(dispatch).toHaveBeenCalledWith(profileSuccess({ id }));
      });

      it('calls done', () => {
        expect(done).toHaveBeenCalled();
      });
    });

    describe('Profile FAILURE', () => {
      const error = {
        status_message: 'error message',
      };
      const apiClient = httpClientMock({
        method: 'get',
        response: error,
        reject: true,
      });

      profileLogic.process({ apiClient, getState }, dispatch, done);

      it('dispatches profileFailure()', () => {
        expect(dispatch).toHaveBeenCalledWith(profileFailure(error));
      });
    });
  });
});
